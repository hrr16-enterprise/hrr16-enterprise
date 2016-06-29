import React, { Component } from 'react';
import { connect } from 'react-redux';
import Yelp from '../components/Yelp.jsx';

function mapStateToProps({ yelp }) {
  return { yelp };
}

export default connect(mapStateToProps)(Yelp);
