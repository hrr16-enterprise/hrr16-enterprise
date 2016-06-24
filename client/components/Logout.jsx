import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {

  render() {
    const { onLogoutClick } = this.props
    if(this.props.auth.isAuthenticated){
    return (
      <button onTouchTap={this.props.onLogoutClick} className="btn btn-primary">
        Logout
      </button>
      );
    }
  }
}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}
