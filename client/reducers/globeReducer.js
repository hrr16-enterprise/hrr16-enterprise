import { GLOBE_INSTANTIATED } from '../constants/ActionTypes';

export default (state = {
    exists: false
  }, action) => {
  switch (action.type) {
    case GLOBE_INSTANTIATED:
      return Object.assign({}, state, {
        ...state,
        exists: true
      });
    default:
      return state;
  }
};
