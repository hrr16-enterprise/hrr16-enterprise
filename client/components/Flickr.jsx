import React, { Component } from 'react';

export default class Flickr extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(object) {
    if (this.props.flickr.result.data) {
      for (var i = 0; i < this.props.flickr.result.data.photos.photo.length; i++) {
        this.props.pingGlobe("<div class='card' class='flickrContainer'>" + 
          "<div class='flickrLogo'><img class='flickrImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flickr_logo.png/640px-Flickr_logo.png'>" + 
          "<i class='fa fa-heart fa-2x' id='flickrHeart' aria-hidden='true'></i></div>" + 
          "<h5>" + this.props.flickr.result.data.photos.photo[i].title + "</h5>" + 
          "<img src=https://farm" + 
          this.props.flickr.result.data.photos.photo[i].farm + ".staticflickr.com/" + 
          this.props.flickr.result.data.photos.photo[i].server + "/" + 
          this.props.flickr.result.data.photos.photo[i].id + "_" + 
          this.props.flickr.result.data.photos.photo[i].secret + "_n.jpg/></div>", 
          this.props.flickr.globe,
          this.props.flickr.result.data.photos.photo[i].latitude,
          this.props.flickr.result.data.photos.photo[i].longitude,
          340,
          340
        );
      }
    }
  }

  render() {
    return false;
  }
}
