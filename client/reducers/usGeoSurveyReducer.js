import * as types from '../constants/ActionTypes';

export default (state = {
  result: []
}, action) => {
  switch (action.type) {
    case types.USGEO_SUCCESS:
    return {
      ...state,
      result: action.payload
    }
    case types.USGEO_FAILURE:
    return{
      ...state,
      result: action.err
    };
    default:
    return state;
  };
};
