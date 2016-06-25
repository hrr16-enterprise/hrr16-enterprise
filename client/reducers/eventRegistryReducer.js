import * as types from '../constants/ActionTypes';

export default (state = {
  data: []
}, action) => {
  switch (action.type) {
    case types.RECEIVE_EVENTS:
    return {
      ...state,
      data: action.payload
    };
    default:
    return state;
  }
}