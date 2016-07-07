import * as types from '../constants/ActionTypes';

export default (state = {
  popup: {
    content: '',
    open: false,
    type: ''
  },
  button: {
    active: false
  },
  animation: false
}, action) => {
  switch (action.type) {
    case types.ANIMATION_STATE:
    return {
      ...state,
      animation: action.payload
    };
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
    case types.GLOBE_INSTANTIATED:
    return {
      ...state,
      globe: action.payload
    };
    default:
    return state;
  }
};
