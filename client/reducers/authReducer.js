import { LOCK_SUCCESS, LOGOUT_SUCCESS, DATA_SUCCESS } from '../constants/ActionTypes';

export default (state = {
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    data : null
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
    case DATA_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        data: action.payload
      })
    default:
      return state;
  }
};
