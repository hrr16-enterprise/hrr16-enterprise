import React, { Component } from 'react';

export default class FetchButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    if(this.props.auth.isAuthenticated){
      return (
        <div className="button">
          <button onTouchTap={this.props.getData.bind(this)}>"The World in a minute"</button>
        </div>
        );
    } else {
      return (
        <div> Please Log In</div>
        );
    }
  }
}

