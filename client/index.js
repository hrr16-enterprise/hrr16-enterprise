import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/RootContainer.js';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReduxPromise from 'redux-promise';


require('file?name=favicon.ico!./favicon.ico');
require('./styles/styles.css');

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
