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

// Button Actions

const updateResultState = (updatedState) => {
  return {
    type: types.UPDATE_RESULT_STATE,
    updatedResultState: updatedState
  };
};

// flickr
const FLICKR_KEY = 'c47ece224080058910137d84a24cfe94';
// echo test url - switch out later for photo fetch
const FLICKR_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c47ece224080058910137d84a24cfe94&has_geo=&format=json&nojsoncallback=1';

export const FETCH_FLICKR = 'FETCH_FLICKR';

export function fetchFlickr() {
  // const url?
  const request = axios.get(FLICKR_URL);
  return {
    type: FETCH_FLICKR,
    payload: request
  };
}

// export function fetchData(data) {
//   return dispatch => {
//     dispatch(requestData(data))
//     axios.get('/apiData').then((response)=>{
//       console.log(response);
//     });
//   }
// }
