import * as types from '../constants/ActionTypes';

export default (state = {
  result: []  // State for results
}, action) => {
  switch (action.type) {
    case types.NYTIMES_SUCCESS:
    return {
      ...state,
      result: action.payload
    };
    case types.NYTIMES_FAILURE:
    return {
      ...state,
      result: []
    };
    default:
    return state;
  }
  //   case types.GLOBE_INSTANTIATED:
  //   return {
  //     ...state,
  //     globe: action.payload
  //   };
  //   default:
  //   return state;
}
