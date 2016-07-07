import React, { Component } from 'react';

export default class Flickr extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(object) {
    if (this.props.flickr.result.data) {
      // this.props.flickr.result.data.photos.photo.length
      for (var i = 0; i < 3; i++) {
        
        const titleWhole = this.props.flickr.result.data.photos.photo[i].title;
        const titleSlice = titleWhole.slice(0,10) + "...";
        
        this.props.pingGlobe("<div class='flickrContainer'>" + 
          "<div class='flickrLogo'><img class='flickrImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flickr_logo.png/640px-Flickr_logo.png'></div>" + 
          "<div>" + titleSlice + "</div>" + 
          "<img src=https://farm" + 
          this.props.flickr.result.data.photos.photo[i].farm + ".staticflickr.com/" + 
          this.props.flickr.result.data.photos.photo[i].server + "/" + 
          this.props.flickr.result.data.photos.photo[i].id + "_" + 
          this.props.flickr.result.data.photos.photo[i].secret + "_q.jpg/>" +
          "</div><i class='fa fa-heart fa-2x' id='flickrHeart' aria-hidden='true'></i>", 
          this.props.flickr.globe,
          this.props.flickr.result.data.photos.photo[i].latitude,
          this.props.flickr.result.data.photos.photo[i].longitude,
          200,
          200
        );
      }
    }
  }

  render() {
    return false;
  }
}
