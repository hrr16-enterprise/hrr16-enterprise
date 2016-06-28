import React, { Component } from 'react';
import _ from 'underscore';

export default class Yelp extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.yelp.result.data){
      const posts = this.props.yelp.result.data;
      return (
        <ul>
          {posts.map((post) =>
            <li>
              {post.name}
              <p>{(Math.floor(post.distance)*0.0006).toFixed(2)} mi Away</p>
            </li>
          )} 
        </ul>
      );
    }
    return (
    <div>Yelp stuff goes here!</div>
    );
  }
}
