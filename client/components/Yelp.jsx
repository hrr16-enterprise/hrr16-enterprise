import React, { Component } from 'react';

export default class Yelp extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props){
      const posts = this.props;
      console.log(posts);
      return (
        <ul>
          Yelp stuff goes here. 
        </ul>
      );
    }
    return (
    <div>Yelp stuff goes here!</div>
    );
  }
}
