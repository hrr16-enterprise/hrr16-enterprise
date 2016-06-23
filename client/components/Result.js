import React from 'react';
import { Component } from 'react';
import Flickr from './Flickr';

import Reddit from './Reddit';

class Result extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    // this.props.fetchButtonClickData();
  }

  render(){
    console.log(this.props.reddit);
    const { result, ui, flickr, reddit } = this.props;
    return(
      <div>
        <Flickr flickr={flickr} />
        <Reddit reddit={reddit} />
      </div>
    )
  }
};

export default Result;
