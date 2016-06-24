import React, { Component, PropTypes } from 'react';

export default class Auth extends Component {

  render() {
    const { errorMessage } = this.props;
    if (!this.props.auth.isAuthenticated) {
      return (
        <div>
          <button onTouchTap={this.props.onLoginClick} className="btn btn-primary">
            Login
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button onTouchTap={this.props.onLogOutClick} className="btn btn-primary">
            Logout
          </button>
        </div>
      );
    }
  }
}
