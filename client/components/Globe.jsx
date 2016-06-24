import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  componentDidMount() {
    this.props.instantiateGlobe();
  }

  render() {
    return (
      <div>
        <canvas id="basicGlobe"></canvas>
      </div>
    );
  }
}
