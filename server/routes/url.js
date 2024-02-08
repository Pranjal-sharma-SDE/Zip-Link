const router = require('express').Router();
const isAuthenticated = require('../middlewares/jwt.middleware');
const Url = require('../models/Url.model');
const {generateShortUrl, getAnalytics, getAllUrl} = require('../controllers/url.cjs');


/**
 * All the routes are prefixed with `/api/url`
*/

// Create shoryend URL

router.post('/shorten', isAuthenticated, generateShortUrl);

router.get('/analytics/:shortUrl', isAuthenticated, getAnalytics);

router.post('/allurl',isAuthenticated, getAllUrl);
    


module.exports = router;
