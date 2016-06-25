import * as types from '../constants/ActionTypes';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer.js';
// import user from './userReducer.js';
import ui from './uiReducer.js';
import flickr from './flickrReducer';
import reddit from './redditReducer';
import globe from './globeReducer';
import eventRegistry from './eventRegistryReducer';
/**
 *  Root Reducer that combines every Reducers
 *  About Reducer in Redux : http://redux.js.org/docs/basics/Reducers.html
 */
const rootReducer = combineReducers({
  form: formReducer, // Reducer provided by 'redux-form' module
  auth,
  ui,
  flickr,
  reddit,
  eventRegistry,
  globe,
  routing
});

export default rootReducer;
