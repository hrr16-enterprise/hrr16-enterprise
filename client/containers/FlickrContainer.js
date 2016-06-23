import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFlickr } from '../actions/index';
import Flickr from '../components/Flickr';

// ES5 syntax below:
// function mapStateToProps({ state }) {
//   return { flickr: state.flickr };
// }

// ES6 syntax below:
function mapStateToProps({ flickr }) {
  return { flickr };
}

export default connect(mapStateToProps)(Flickr);
