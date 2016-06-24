import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import globeHelper from '../services/globe';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import planetaryjs from 'planetary.js';
import axios from 'axios';

// UI Actions
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


// Button Actions
const updateResultState = (updatedState) => {
  return {
    type: types.UPDATE_RESULT_STATE,
    updatedResultState: updatedState
  };
};

// flickr
const FLICKR_KEY = 'c47ece224080058910137d84a24cfe94';

const FLICKR_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c47ece224080058910137d84a24cfe94&safe_search=1&content_type=1&has_geo=1&extras=geo&per_page=10&format=json&nojsoncallback=1';

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
  // const url?
  return (dispatch) => {
    return helper.getHelper(FLICKR_URL)
    .then((response) => {
      dispatch(flickrSuccess(response));
    })
    .catch((err) => {
      dispatch(flickrFailure());
    });
  };
};


export const showLock = () => {
  return {
    type: types.SHOW_LOCK
  };
};

export const lockSuccess = (profile, token) => {
  return {
    type: types.LOCK_SUCCESS,
    profile,
    token
  };
};

export const lockError = (err) => {
  return {
    type: types.LOCK_ERROR,
    err
  };
};

export const login = () => {  
  const lock = new Auth0Lock('VqCTHXNYIEshbutnUFBQSkY38O0AKOGL', 'hrr16enterprise.auth0.com');
  return dispatch => {
    lock.show((err, profile, token) => {
      if (err) {
        dispatch(lockError(err));
        return;
      }
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', token);
      dispatch(lockSuccess(profile, token));
    });
  };
};

export const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS
  };
};

export const logout = () => {
  return dispatch => {
      localStorage.removeItem('profile');
      localStorage.removeItem('id_token');
      dispatch(logoutSuccess());
    };
  };
// Reddit 

export const requestPosts = () => {
  return {
    type: types.REQUEST_POSTS
  };
};

export const receivePosts = (data) => {
  return {
    type: types.RECEIVE_POSTS,
    payload: data
  };
};

export const fetchReddit = () => {
  console.log('calling reddit');
  return dispatch => {
    return helper.getHelper('https://www.reddit.com/new.json?sort=new?')
      .then((response) => {
        console.log(response);
        dispatch(receivePosts(response))})
      .catch((err) => {
        console.log(err);
    });
  };
};

// Globe

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
    oceans: { fill: '#000080' },
    land: { fill: '#339966' },
    borders: { stroke: '#008000' }
  }));

  globe.loadPlugin(globeHelper.lakes({
    fill: '#000080'
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

  return dispatch => {
    dispatch(globeInstantiated());
  };
};
