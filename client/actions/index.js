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
      content: content,
      //content, (possible airbnb style)
      type: keyword
    }
  };
};
