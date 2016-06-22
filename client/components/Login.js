import React, { Component, PropTypes } from 'react';

export default class Login extends Component {

  render() {
    const { errorMessage } = this.props;

    return (
      <div>
        <button onTouchTap={this.props.onLoginClick} className="btn btn-primary">
          Login
        </button>
      </div>
    );
  }
}
