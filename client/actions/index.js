import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import axios from 'axios';
import jsonp from 'jsonp';
import _ from 'underscore';

//=================================
// UI Actions
//=================================
export const popupClose = () => {
  return {
    type: types.POPUP_CLOSE
  };
};

export const popupOpen = (content, keyword = 'general') => {
  return {
    type: types.POPUP_OPEN,
    payload: {
      content,
      type: keyword
    }
  };
};


//=================================
// Sidebar Actions
//=================================
export const showSidebar = () => {
  return {
    type: types.SIDEBAR_OPEN,
    payload: true
  };
};

export const hideSidebar = () => {
  return {
    type: types.SIDEBAR_CLOSE,
    payload: false
  };
};

//=================================
// About Actions
//=================================
export const showAbout = () => {
  return {
    type: types.ABOUT_OPEN,
    payload: true
  };
};

export const hideAbout = () => {
  return {
    type: types.ABOUT_CLOSE,
    payload: false
  };
};


//=================================
// Auth Actions
//=================================
export const lockSuccess = (profile, token) => {
  return {
    type: types.LOCK_SUCCESS,
    profile,
    token
  };
};
  
export const GetUserData = (callback) => {
  const requestPath = '/results/user/data' + JSON.parse(localStorage.getItem('profile')).clientID;
    helper.getHelper(requestPath)
    .then((response) => {
      callback(response);
    })
}; 

export const DataSuccess = (load) => {
  return {
    type: types.DATA_SUCCESS,
    payload: load 
  };
};


export const lockFailure = (err) => {
  return {
    type: types.LOCK_FAILURE,
    err
  };
};

export const login = () => {  
  const lock = new Auth0Lock('VqCTHXNYIEshbutnUFBQSkY38O0AKOGL', 'hrr16enterprise.auth0.com');
  return (dispatch) => {
    lock.show((err, profile, token) => {
      if (err) {
        console.error(err);
        dispatch(lockFailure(err));
      } else {
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', token);
        dispatch(lockSuccess(profile, token));
        GetUserData((data) => {
          dispatch(DataSuccess(data));
        });
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    dispatch(logoutSuccess());
  };
};

export const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS
  };
};


//=================================
// Globe Actions
//=================================
export const globeInstantiated = (earth) => {
  return {
    type: types.GLOBE_INSTANTIATED,
    payload: earth
  };
};

export const instantiateGlobe = () => {
  const body = document.getElementsByTagName('body');

  const earth = new WE.map('earth_div', {
    sky: true,
    atmosphere : true
  });

  earth.setZoom(1.8);

  earth.on('click', function() {
    closeMarkers();
  })

  document.getElementById('earth_div').onclick = function() {
    clearInterval(rotation);
  }
  
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(earth);

  let rotation = setInterval(() => {
    const c = earth.getPosition();
    if(c[0] && c[1]) {
      earth.setCenter([c[0], c[1] + 0.1]);
    }
  }, 30);

  return (dispatch) => {
    dispatch(globeInstantiated(earth));
  };
};

const markers = [];

const markerExists = (lat, lng) => {
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].lat === lat && markers[i].lng === lng) {
      return true;
    }
  }
  return false;
};

const clearMarkers = (markers, globe) => {
  if(markers.length > 0){
    markers.forEach((marker) => {
      marker.removeFrom(globe);
    markers.length = 0;
    });
  }
};

const closeMarkers = () => {
  markers.forEach(function(marker) {
    marker.closePopup();
  });
}


export const pingGlobe = (html, globe, latitude, longitude, width, height) => {
  // clearMarkers(markers, globe);
  if (!markerExists(latitude, longitude)) {
    const marker = WE.marker([latitude, longitude]);
    marker.lat = latitude;
    marker.lng = longitude;
    marker.addTo(globe).bindPopup(html, {maxWidth: width, maxHeight: height, closeButton: true});

    marker.on('click', function() {
      globe.panTo([latitude, longitude]);
    });

    // TODO: Need function here to identify which api data service and assign it a color to pass in the line below
    var testColors = ['blue','pink','yellow','red','green']
    marker.element.firstChild.style.backgroundColor = testColors[Math.floor(Math.random() * testColors.length)];
    markers.push(marker);
  }
  return {
    type: types.GLOBE_PINGED,
    payload: markers
  };
}

//=================================
// Flickr Actions
//=================================
export const flickrSuccess = (photos) => {
  return {
    type: types.FLICKR_SUCCESS,
    payload: photos
  };
};

export const flickrFailure = () => {
  return {
    type: types.FLICKR_FAILURE
  };
};

export const fetchFlickr = () => {
  return (dispatch) => {
    return helper.getHelper('/results/flickr')
    .then((response) => {
      dispatch(flickrSuccess(response));
    })
    .catch((err) => {
      console.error(err);
      dispatch(flickrFailure());
    });
  };
};


//=================================
// Reddit Actions
//=================================
export const redditSuccess = (data) => {
  return {
    type: types.REDDIT_SUCCESS,
    payload: data
  };
};

export const redditFailure = () => {
  return {
    type: types.REDDIT_FAILURE
  };
};

export const fetchReddit = () => {
  return (dispatch) => {
    return helper.getHelper('/results/reddit')
    .then((response) => {
      dispatch(redditSuccess(response))
    })
    .catch((err) => {
      console.error(err);
      dispatch(redditFailure())
    });
  };
};


//=================================
// NYTimes Actions
//=================================
export const nyTimesSuccess = (articleData) => {
  return {
    type: types.NYTIMES_SUCCESS,
    payload: articleData
  };
};

export const nyTimesFailure = () => {
  return {
    type: types.NYTIMES_FAILURE
  };
};

export const fetchNYTimes = () => {
  return (dispatch) => {
    return helper.getHelper('/results/nytimes')
    .then((response) => {
      dispatch(nyTimesSuccess(response));
    })
    .catch((err) => {
      console.error(err);
      dispatch(nyTimesFailure());
    });
  };
};


//=================================
// Event Registry Actions
//=================================
export const eventsSuccess = (data) => {
  return {
    type: types.EVENTS_SUCCESS,
    payload: data
  };
};

export const fetchEventRegistry = () => {
  return (dispatch) => {
    jsonp('http://eventregistry.org/jsonCache/overview?action=getRecentActivity&maxCacheAge=1&recentActivityArticlesIncludeLocationGeoLocation=true&recentActivityArticlesIncludeSourceLocation=true&recentActivityArticlesMaxArticleCount=15&recentActivityEventsIncludeLocationGeoLocation=true&recentActivityEventsMandatoryLocation=false&recentActivityEventsMaxEventCount=15&recentActivityEventsMinAvgCosSim=0.3', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        dispatch(eventsSuccess(data));
      }
    });
  };
};


//=================================
// YouTube Actions
//=================================
export const youtubeSuccess = (data) => {
  return {
    type: types.YOUTUBE_SUCCESS,
    payload: data
  };
};

export const fetchYoutube = () => {
  return (dispatch) => {
    return helper.getHelper('/results/youtube')
    .then((response) => {
      dispatch(youtubeSuccess(response));
    })
    .catch((err) => {
      console.error(err);
    });
  };
};


//=================================
// Yelp Actions
//=================================
export const YelpSuccess = (data) => {
  return {
    type: types.YELP_SUCCESS,
    payload: data
  };
};

export const YelpFailure = (err) => {
  return {
    type: types.YELP_FAILURE,
    err: err
  };
};
// yelp fetch including geolocation
// geolcation takes ~5 seconds 
export const fetchYelp = () => {
  var location;
  navigator.geolocation.getCurrentPosition((position) => {
      location = position.coords
  });
      return (dispatch) => {
        setTimeout(() => {
          return helper.postHelper('/results/yelp',
            { longitude:location.longitude,
              latitude: location.latitude
            })
          .then((response) => {
            dispatch(YelpSuccess(response))
          })
          .catch((err) => {
            dispatch(YelpFailure(err))
          });
        }, 5000);
      };
};


//=================================
// US Geological Survey Actions
//=================================
export const usGeoSuccess = (data) => {
  return {
    type: types.USGEO_SUCCESS,
    payload: data
  };
};

export const usGeoFailure = (err) => {
  return {
    type: types.USGEO_FAILURE,
    err: err
  };
};

export const fetchUSGeoSurvey = () => {
  return (dispatch) => {
    return helper.getHelper('/results/usgeo')
    .then((response) => {
      dispatch(usGeoSuccess(response.data));
    })
    .catch((err) => {
      console.error(err);
      dispatch(usGeoFailure(err))
    });
  };
};
