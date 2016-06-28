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
    res.send(response.data);
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
    res.send(response.data);
  })
  .catch((error) => {
    console.error(error);
    res.send(error);
  })
});

//nytimes request handlers
router.get('/nytimes', (req, res) => {
  
  // location randomizer for NY Times api call
  const nyTimesLocations = ["Europe", "United States", "Australia", "South America", "Russia", "China", "Japan", "Middle East", "Africa", "Central America", "India", "Mexico", "Venezuela", "Spain", "France", "Vietnam", "Thailand", "South Africa", "Kenya"];
  var randomNYTimesLocation = nyTimesLocations[Math.floor(Math.random()*nyTimesLocations.length)];
  
  const nyTimesUrl = 'http://api.nytimes.com/svc/semantic/v2/concept/name/nytd_geo/' + randomNYTimesLocation  + '?fields=all&' + 'api-key=' + private.NYTIMES_KEY;
  return helper.getHelper(nyTimesUrl)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.error(error);
    res.send(error);
  })
});

module.exports = router;
