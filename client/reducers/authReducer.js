import { LOCK_SUCCESS, LOGOUT_SUCCESS } from '../constants/ActionTypes';

export default (state = {
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) => {
  switch (action.type) {
    case LOCK_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        isAuthenticated: true,
        errorMessage: ''
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        isAuthenticated: false,
        errorMessage: ''
      })
    default:
      return state;
  }
};
