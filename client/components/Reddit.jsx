import React, { Component } from 'react';

export default class Reddit extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.reddit.result.data){
      const posts = this.props.reddit.result.data.data.children;
      return (
        <ul>
          {posts.map((post, i) =>
            <li key={i}><a href={post.data.url}>{post.data.title}</a></li>
          )}
        </ul>
      );
    }
    return (
    <div>This is where the latest Reddit Posts should go!</div>
    );
  }
}
