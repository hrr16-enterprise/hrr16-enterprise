import * as types from '../constants/ActionTypes';

export default (state = {
  result: []
}, action) => {
  switch (action.type) {
    case types.YOUTUBE_SUCCESS:
    return {
      ...state,
      result: action.payload
    }
    case types.GLOBE_INSTANTIATED:
    return {
      ...state,
      globe: action.payload
    };
    default:
    return state;
  }
};
