// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import FetchButtonComponent from '../components/FetchButton';

function mapDispatchToProps(dispatch) {
  console.log("test");
  return {
    fetchFlickr: () => {
      console.log('shotsfired');
      dispatch(actions.fetchFlickr());
    }
  };
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    
    ui: state.ui
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchButtonComponent);
