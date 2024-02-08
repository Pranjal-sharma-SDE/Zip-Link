const shortid = require('shortid');

const URL = require("../models/Url.model");
const User = require("../models/User.model");

async function generateShortUrl(req, res) {
    const { originalUrl } = req.body;
    // console.log(" Payload @ url "+req.payload.id)
    const userId =  req.payload.id;

    if (!originalUrl) {

        return res.status(400).json({ message: "Upload a valid URL!" })
    }

   
   try {
    const shortUrl = shortid()
    // Create a new URL and get its ID
    const url = await URL.create({ originalUrl, shortUrl, user: userId, visitedHistory: []});
    const urlId = url._id;

    // Update the user's document with the new URL ID
    await User.updateOne({ _id: userId }, { $push: { urls: urlId } });


    return res.status(200).json({ shortUrl })
   } catch (error) {
    return res.status(500).json({ message: error.message })
   }

}

async function getAnalytics(req, res) {
    try {
      const { shortUrl } = req.params;
      const url = await URL.findOne({ shortUrl });
  
      // Check if url is null or visitedHistory is null
      if (!url || !url.visitedHistory) {
        return res.status(200).json({ totalClicks: 0, analytics: [] });
      }
  
      return res.status(200).json({
        totalClicks: url.visitedHistory.length,
        analytics: url.visitedHistory
      });
    } catch (error) {
      // Handle any other errors that might occur during the process
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

async function getAllUrl(req, res) {
  const userId = req.payload.id;
  const urls = await User.findById(userId).populate('urls');
  return res.status(200).json({ urls: urls.urls });
}


module.exports = { generateShortUrl, getAnalytics, getAllUrl }; 
