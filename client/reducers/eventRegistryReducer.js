import * as types from '../constants/ActionTypes';

export default (state = {
  data: []
}, action) => {
  switch (action.type) {
    case types.EVENTS_SUCCESS:
    return {
      ...state,
      data: action.payload
    };
    case types.GLOBE_INSTANTIATED:
    return {
      ...state,
      globe: action.payload
    };
    default:
    return state;
  }
}