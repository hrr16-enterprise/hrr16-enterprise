import { GLOBE_INSTANTIATED } from '../constants/ActionTypes';
import * as types from '../constants/ActionTypes';

export default (state = {
    exists: false,
    globe: null,
    pings: []
  }, action) => {
  switch (action.type) {
    case types.GLOBE_INSTANTIATED:
      return {
        ...state,
        exists: true,
        globe: action.payload
      };
    case types.GLOBE_PINGED:
      return {
        ...state,
        pings: action.payload
      };
    default:
      return state;
  }
};
