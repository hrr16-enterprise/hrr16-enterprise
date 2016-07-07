import React, { Component } from 'react';

export default class FetchButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    if(this.props.auth.isAuthenticated){
      return (
        <div className={this.props.ui.animation ? 'animation-end fetch-button' : 'fetch-button'}>
          <button onTouchTap={this.props.getData.bind(this)} className="waves-effect waves-light btn">New Momento</button>
        </div>
      );
    } else {
      return false;
    }
  }
}
