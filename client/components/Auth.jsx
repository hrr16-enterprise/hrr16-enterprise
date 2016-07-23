import React, { Component, PropTypes } from 'react';

export default class Auth extends Component {

  /**
   * Render's login and logout buttons
   */
  render() {
    const { errorMessage } = this.props;
    if (!this.props.auth.isAuthenticated) {
      return (
        <div className={this.props.ui.animation ? 'animation-end auth-button' : 'auth-button'}>
          <button onTouchTap={this.props.onLoginClick} className="waves-effect waves-light btn">
            Login
          </button>
        </div>
      );
    } else {
      return (
        <div className={this.props.ui.animation ? 'animation-end auth-button' : 'auth-button'}>
          <button onTouchTap={this.props.onLogOutClick} className="waves-effect waves-light btn">
            Logout
          </button>
        </div>
      );
    }
  }
}
