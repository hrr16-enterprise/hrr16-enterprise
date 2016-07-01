import React, { Component } from 'react';

export default class Flickr extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(object) {
    if (this.props.flickr.result.data) {
      console.log(this.props.flickr.result.data.photos.photo);
      // this.props.pingGlobe(this.props.flickr.globe, this.props.flickr.result.data.photos.photo[0].latitude, this.props.flickr.result.data.photos.photo[0].longitude);
      this.props.pingGlobe(this.props.flickr.globe, this.props.flickr.result.data.photos.photo);
    }
  }
  

  render() {    
    if (!this.props.flickr.result.data) {
      return (
      <div className="placeholder"></div>
      );
    }
    
    return (
      <div>
        <img src={'https://farm' + this.props.flickr.result.data.photos.photo[0].farm + '.staticflickr.com/' + this.props.flickr.result.data.photos.photo[0].server + '/' + this.props.flickr.result.data.photos.photo[0].id + '_' + this.props.flickr.result.data.photos.photo[0].secret + '_n.jpg'}/>
      </div>
    );
  }
}
