import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';

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

// export function fetchData(data) {
//   return dispatch => {
//     dispatch(requestData(data))
//     axios.get('/apiData').then((response)=>{
//       console.log(response);
//     });
//   }
// }
