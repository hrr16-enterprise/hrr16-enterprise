import * as types from '../constants/ActionTypes';

/**
 *  Reducer related to result data
 */
export default (state = {
  result: []        // State for results
}, action) => {
  switch (action.type) {
    case types.UPDATE_RESULT_STATE:
    return {
      ...state,
      result: action.updatedResultState
    };
    default:
    return state;
  }
};
