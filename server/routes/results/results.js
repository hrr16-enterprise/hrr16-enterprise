const express = require('express');
const router = express.Router();
const Promise = require('bluebird');
const helper = require('../../services/helper.js');
const hidden = require('../../private/private.js');

//=======================
// Flicker Request Handlers
//=======================
router.get('/flickr', (req, res) => {
  const flickrUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + hidden.FLICKR_KEY + '&safe_search=1&content_type=1&has_geo=1&extras=geo&per_page=10&format=json&nojsoncallback=1';
  return helper.getHelper(flickrUrl)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.error(error);
    res.send(error);
  })
});

//=======================
// Reddit Request Handlers
//=======================

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
  const randomNYTimesLocation = nyTimesLocations[Math.floor(Math.random() * nyTimesLocations.length)];
  const nyTimesUrl = 'http://api.nytimes.com/svc/semantic/v2/concept/name/nytd_geo/' + randomNYTimesLocation  + '?fields=all&api-key=' + hidden.NYTIMES_KEY;
  
  return helper.getHelper(nyTimesUrl)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.error(error);
    res.send(error);
  })
});


// YouTube request handlers
router.get('/youtube', (req, res) => {
  const cities = [
    '40.7127%2C-74.0059', //New York City, United States
    '25.760372%2C-80.192416', //Miami, United States
    '41.798807%2C-87.593138', //Chicago, United States
    '34.041990%2C-118.245638', //Los Angeles, United States
    '19.425652%2C-99.134697', //Mexico City, Mexico
    '4.672111%2C-74.073986', //Bogota, Columbia
    '-12.048627%2C-77.042783', //Lima, Peru
    '-34.617486%2C-58.379102', //Buenos Aires, Argentina
    '-23.567035%2C-46.634479', //Sao Paulo, Brazil
    '55.746941%2C37.620696', //Moscow, Russia
    '40.983832%2C28.970163', //Istanbul, Turkey
    '50.104395%2C8.699041', //Frankfurt, Germany
    '40.409642%2C-3.707698', //Madrid, Spain
    '35.700346%2C139.728892', //Tokyo, Japan
    '37.549353%2C126.990473', //Seoul, South Korea
    '22.429811%2C114.125089', //Hong Kong, China
    '14.598382%2C120.983378', //Manila, Philippines
    '13.732118%2C100.498956', //Bangkok, Thailand
    '-6.219671%2C106.848032', //Jakarta, Indonesia
    '35.682129%2C51.388967', //Tehran, Iran
    '19.071852%2C72.875712', //Mumbai, India
    '28.641455%2C77.220812', //New Delhi, India
    '30.039886&2C31.236133', //Cairo, Egypt
    '6.508575%2C3.375481', //Lagos, Nigeria
    '-26.205713%2C28.045162', //Johannesburg, South Africa
    '-33.875832%2C151.209448' //Sydney, Australia
  ]
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const youtubeDataUrl = 'https://www.googleapis.com/youtube/v3/search?part=id&location=' + randomCity + '&locationRadius=1000km&maxResults=1&order=date&safeSearch=moderate&type=video&videoEmbeddable=true&key=' + hidden.YOUTUBE_KEY;
  
  return helper.getHelper(youtubeDataUrl)
  .then((response) => {
    const vidId = response.data.items[0].id.videoId;
    const youtubeVidUrl = 'https://www.googleapis.com/youtube/v3/videos?part=recordingDetails&id=' + vidId + '&maxResults=1&key=' + hidden.YOUTUBE_KEY;
    return helper.getHelper(youtubeVidUrl)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.send(error);
    })
  })
  .catch((error) => {
    console.error(error);
    res.send(error);
  })
});

//=======================
// Yelp Request Handlers
//=======================
const yelp = hidden.YELP_KEY;
const search_params = {ll:null, 
                        limit: 10,
                        deals_filter: true, 
                        radius_filter: 8000
                      };
router.post('/yelp', (req, res) => {
  search_params.ll =  req.body.latitude + ',' 
                    + req.body.longitude;
  return yelp.search(search_params)
  .then((data) => {
    res.send(data.businesses);
  })
  .catch((err) => {
    res.send(err);
  });
});


//=========================================
// US Geological Survey Request Handlers
//=========================================
router.get('/usgeo', (req, res) => {
  console.log('Console log usgeo');
  const usGeoUrl = 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&orderby=time'
  return helper.getHelper(usGeoUrl)
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => {
    res.send(err);
  });
});


//=======================
// User Post Handler
//=======================
router.post('/user/data', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;
