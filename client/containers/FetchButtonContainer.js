import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFlickr } from '../actions/index';

class FetchButton extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    this.onButtonClick = this.onButtonClick.bind(this);
    
  }
  
  onButtonClick() {
    this.props.fetchFlickr();
    console.log("testing!");
  }
  
  render() {
    return (
      <div className="button">
        <button type="submit" onClick={this.onButtonClick}>"The World in a minute"</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFlickr }, dispatch);
}

export default connect(null, mapDispatchToProps)(FetchButton);