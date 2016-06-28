const FLICKR_KEY = process.env.FLICKR_KEY;
const NYTIMES_KEY = process.env.NYTIMES_KEY;
const YOUTUBE_KEY = process.env.YOUTUBE_KEY;

//=======================
// Authentication Keys
//=======================

const Yelp = require('yelp');

// Yelp
const YELP_KEY = new Yelp({
  consumer_key: 'N-QdzXYBf25HV-YhRQlfHQ',
  consumer_secret: 'iQ1jEHYgmvlgaI1UBvKG7ZceRQA',
  token: 'ntMl9EZxwCfubY9YAStJrBjwlWmDvFS8',
  token_secret: '0BuTKkSCDDlSYpHW4P8zv91PcB8'
});

module.exports = {
  FLICKR_KEY,
  NYTIMES_KEY,
  YOUTUBE_KEY
};
