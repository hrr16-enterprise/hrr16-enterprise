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
    default:
    return state;
  };
};
