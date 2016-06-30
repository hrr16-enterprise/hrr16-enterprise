import React, { Component } from 'react';

export default class Youtube extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (!this.props.youtube.result.data) {
      return (
        <div></div>
      );
    }
    
    const vidData = this.props.youtube.result.data;
    return (
      <div>
        <iframe id="youtubeVid1" src={'https://www.youtube.com/embed/' + vidData.items[0].id} width="600" height="338" frameborder="0" allowfullscreen="true" rel="true"></iframe>
      </div>
    );
  };
};
