const express = require('express');
const router = express.Router();
const Promise = require('bluebird');
const helper = require('../../services/helper.js');
const private = require('../../private/private.js');

//flickr request handlers
router.get('/flickr', (req, res) => {
  const flickrUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + private.FLICKR_KEY + '&safe_search=1&content_type=1&has_geo=1&extras=geo&per_page=10&format=json&nojsoncallback=1';
  return helper.getHelper(flickrUrl)
  .then((response) => {
    res.send(response);
  })
  .catch((error) => {
    console.error(error);
    res.send(error);
  })
});

//reddit request handlers
router.get('/reddit', (req, res) => {
  const redditUrl = 'https://www.reddit.com/new.json?sort=new?';
  return helper.getHelper(redditUrl)
  .then((response) => {
    res.send(response);
  })
  .catch((error) => {
    console.error(error);
    res.send(error);
  })
});

module.exports = router;