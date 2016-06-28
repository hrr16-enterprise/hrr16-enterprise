import React, { Component } from 'react';


export default class Yelp extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.yelp.result.data){
      const posts = this.props.yelp.result.data;
      console.log(posts);
      return (
        <ul>
          {posts.map((post) =>
            <li>
              {post.name}
              <p><img src = {post.image_url}/></p>
              <p><img src = {post.rating_img_url}/></p> 
               <p>{post.deals[0].options[0].title}</p>
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
