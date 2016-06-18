import React from 'react';
import { Component } from 'react';

class Result extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchButtonClickData();
  }

  render(){
    const { result, ui } = this.props;
    return(
      <div>
        <h1>{result.title}</h1>
        <img src={result.imgURL} />
      </div>
    )
  }
};

export default Result;
