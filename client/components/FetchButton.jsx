import React, { Component } from 'react';

export default class FetchButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    if(this.props.auth.isAuthenticated){
      return (
        <div className="button">
          <button onTouchTap={this.props.getData.bind(this)} className="waves-effect waves-light btn">New Momento</button>
        </div>
        );
    } else {
      return (
        <div className="placeholder"> Please Log In</div>
        );
    }
  }
}

