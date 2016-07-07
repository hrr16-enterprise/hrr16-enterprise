// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import FetchButtonComponent from '../components/FetchButton.jsx';

function mapDispatchToProps(dispatch) {
  return {
    getData: () => {
      dispatch(actions.toggleAnimationState(true));
      dispatch(actions.fetchReddit());
      dispatch(actions.fetchFlickr());
      dispatch(actions.fetchNYTimes());
      dispatch(actions.fetchEventRegistry());
      dispatch(actions.fetchYoutube());
      dispatch(actions.fetchYelp());
      dispatch(actions.fetchUSGeoSurvey());
    }
  };
}

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    ui: state.ui
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchButtonComponent);
