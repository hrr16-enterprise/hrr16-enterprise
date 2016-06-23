import React from 'react';
import { Component } from 'react';
import Flickr from './Flickr';

class Result extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    // this.props.fetchButtonClickData();
  }

  render(){
    const { result, ui, flickr } = this.props;
    return(
      <div>
        <Flickr 
        flickr={flickr}
        />
      </div>
    )
  }
};

export default Result;
