import * as types from '../constants/ActionTypes';

export default (state = {
  visible: false
}, action) => {
  switch (action.type) {
    case types.SIDEBAR_OPEN:
	    return {
	      ...state,
	      visible: action.payload
	    };
	  case types.SIDEBAR_CLOSE:
	    return {
	      ...state,
	      visible: action.payload
	    };
    default:
    	return state;
  }
};
