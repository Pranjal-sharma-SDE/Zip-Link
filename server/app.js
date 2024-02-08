require("dotenv").config()
require("./config/dbConfig")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors = require("cors")
const URL = require("./models/Url.model")

const app = express()

//? Services like render use something called a proxy and you need to add this to your server
app.set("trust proxy", 1)
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
	cors({
		origin: [process.env.FRONTEND_URL],
		credentials: true,
	})
)

app.use("/api", require("./routes/index"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/url", require("./routes/url"))
app.get('/:shortid',async (req, res) => {

	const shortid = req.params.shortid;
	const entry = await URL.findOneAndUpdate({shortUrl: shortid},
		{
			$push: {
				visitedHistory: new Date()
			}
		}
		);
		res.redirect(entry.originalUrl)
	
})

require("./error-handling/index")(app)

module.exports = app
