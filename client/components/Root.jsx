import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

export default class Root extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.attemptVerify();
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
