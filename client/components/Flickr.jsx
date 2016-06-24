import React, { Component } from 'react';

export default class Flickr extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (!this.props.flickr.result.data) {
      return (
      <div>AWAITING FETCH INVOKE...</div>
      );
    }
    
    return (
      <div><img src={'https://farm' + this.props.flickr.result.data.photos.photo[0].farm + '.staticflickr.com/' + this.props.flickr.result.data.photos.photo[0].server + '/' + this.props.flickr.result.data.photos.photo[0].id + '_' + this.props.flickr.result.data.photos.photo[0].secret + '_n.jpg'}/></div>
    );
  }
}
