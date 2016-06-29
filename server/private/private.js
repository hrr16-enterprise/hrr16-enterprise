const FLICKR_KEY = process.env.FLICKR_KEY;
const NYTIMES_KEY = process.env.NYTIMES_KEY;
const YOUTUBE_KEY = process.env.YOUTUBE_DATA;

//=======================
// Authentication Keys
//=======================

const Yelp = require('yelp');

// Yelp
const YELP_KEY = new Yelp({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
});

module.exports = {
  FLICKR_KEY,
  NYTIMES_KEY,
  YOUTUBE_KEY,
  YELP_KEY
};
