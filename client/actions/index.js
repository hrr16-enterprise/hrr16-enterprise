import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import globeHelper from '../services/globe';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import planetaryjs from 'planetary.js';
import axios from 'axios';
import jsonp from 'jsonp';

//=======================
// UI Actions
//=======================
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


//=======================
// Auth Actions
//=======================
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


//=======================
// Flickr Actions
//=======================
export const flickrSuccess = (photos) => {
  console.log("photos: ", photos);
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


//=======================
// Reddit Actions
//=======================
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


//=======================
// Globe Actions
//=======================
export const globeInstantiated = () => {
  return {
    type: types.GLOBE_INSTANTIATED
  };
};

export const instantiateGlobe = () => {
  const globe = planetaryjs.planet();

  globe.loadPlugin(globeHelper.autorotate(10));

  globe.loadPlugin(planetaryjs.plugins.earth({
    topojson: { file: 'https://raw.githubusercontent.com/darul75/ng-planetaryjs/master/public/world-110m-withlakes.json' },
    oceans: { fill: '#4BBCC8' },
    land: { fill: '#50bc5d', stroke: '#46a551' },
    borders: { stroke: '#46a551' }
  }));

  globe.loadPlugin(globeHelper.lakes({
    fill: '#4BBCC8',
    stroke: '#46a551'
  }));

  globe.loadPlugin(planetaryjs.plugins.pings());

  globe.loadPlugin(planetaryjs.plugins.zoom({
    scaleExtent: [100, 300]
  }));

  globe.loadPlugin(planetaryjs.plugins.drag({
    onDragStart: () => {
      globe.plugins.autorotate.pause();
    },
    onDragEnd: () => {
      globe.plugins.autorotate.resume();
    }
  }));

  globe.projection.scale(175).translate([175, 175]).rotate([0, -10, 0]);

  const colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];

  setInterval(() => {
    const lat = Math.random() * 170 - 85;
    const lng = Math.random() * 360 - 180;
    const color = colors[Math.floor(Math.random() * colors.length)];
    globe.plugins.pings.add(lng, lat, { color, ttl: 2000, angle: Math.random() * 10 });
  }, 150);

  const canvas = document.getElementById('basicGlobe');
  canvas.width = 800;
  canvas.height = 800;

  const context = canvas.getContext('2d');
  context.scale(2, 2);

  globe.draw(canvas);

  return (dispatch) => {
    dispatch(globeInstantiated());
  };
};


//=======================
// Event Registry Actions
//=======================
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
