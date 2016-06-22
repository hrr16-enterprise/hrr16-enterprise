import * as types from '../constants/ActionTypes';

export default (state = {
  result: []  // State for results
}, action) => {
  switch (action.type) {
    case types.FLICKR_SUCCESS:
    return {
      ...state,
      result: action.payload
    };
    default:
    return state;
  }
}
