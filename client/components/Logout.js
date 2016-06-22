import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {

  render() {
    const { onLogoutClick } = this.props

    return (
      <button onTouchTap={this.props.onLogoutClick} className="btn btn-primary">
        Login
      </button>
    )
  }

}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}
