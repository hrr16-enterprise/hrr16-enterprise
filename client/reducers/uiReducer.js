import * as types from '../constants/ActionTypes';

export default (state = {
  popup: {
    content: '',
    open: false,
    type: ''
  },
  button: {
    active: false
  }

}, action) => {
  switch (action.type) {
    case types.POPUP_CLOSE:
    return {
      ...state,
      popup: {
        content: '',
        open: false,
        type: ''
      }
    };
    case types.POPUP_OPEN:
    return {
      ...state,
      popup: {
        content: action.payload.content,
        open: true,
        type: action.payload.type
      }
    };
    default:
    return state;
  }
};
