import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
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


//Button Actions
const updateResultState = (updatedState) => {
  return {
    type: types.UPDATE_RESULT_STATE,
    updatedResultState: updatedState
  };
};

// flickr
const FLICKR_KEY = 'c47ece224080058910137d84a24cfe94';
// need to backtick append of upload time, other constraints, geotagging?, etc.
const FLICKR_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c47ece224080058910137d84a24cfe94&has_geo=&format=json&nojsoncallback=1';

export const flickrSuccess = (data) => {
  return {
    type: types.FLICKR_SUCCESS,
    payload: data
  }
}

export const flickrFailure = () => {
  return {
    type: types.FLICKR_FAILURE
  }
}

export const fetchFlickr = () => {
  // const url?
  return (dispatch) => {
    return helper.getHelper(FLICKR_URL)
    .then((response) => {
      dispatch(flickrSuccess(response.photos));
    })
    .catch((err) => {
      console.error(err);
      dispatch(flickrFailure());
    });
  }
}

