import * as types from '../constants/ActionTypes';

export default (state = {
  result: []
}, action) => {
  switch (action.type) {
    case types.REDDIT_SUCCESS:
    return {
      ...state,
      result: action.payload
    };
    case types.REDDIT_FAILURE:
    return {
      ...state,
      result: []
    };
    default:
    return state;
  }
}
