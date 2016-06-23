import React from 'react';
import { Component } from 'react';

export default class Reddit extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.reddit.data.data){
      const posts = this.props.reddit.data.data.data.children;
      return (
        <ul>
          {posts.map((post, i) =>
            {<li key={i}><a href={post.data.url}>{post.data.title}</a></li>}
          )}
        </ul>
      );
    }
    return (
    <div>This is where the latest Reddit Posts should go!</div>
    );
  }
}
