import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  componentDidMount() {
    this.props.instantiateGlobe();
  }

  render() {
    return (
      <div>
        <canvas id="basicGlobe" width="400" height="400"></canvas>
      </div>
    );
  }
}
