import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reddit from '../components/Reddit.jsx';

function mapStateToProps({ reddit }) {
  return { reddit };
}

export default connect(mapStateToProps)(Reddit);
