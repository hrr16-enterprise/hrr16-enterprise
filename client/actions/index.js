import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import axios from 'axios';
import jsonp from 'jsonp';

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
// Auth Actions
//=================================
export const lockSuccess = (profile, token) => {
  return {
    type: types.LOCK_SUCCESS,
    profile,
    token
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

const markerExists = (marker) => {
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].W === marker.W && markers[i].X === marker.X) {
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

export const pingGlobe = (html, globe, location) => {
  // clearMarkers(markers, globe);
  // locations.forEach((location) => {
    const loc = { lat:location.latitude, lng: location.longitude};
    const marker = WE.marker([loc.lat, loc.lng]);  
    marker.addTo(globe).bindPopup(html, {closeButton: true});
    markers.push(marker);
  // });
  
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
    jsonp('http://eventregistry.org/json/overview?action=getRecentActivity&content_type=1', (err, data) => {
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
