import React, { Component } from 'react';

export default class Flickr extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(object) {
    // if (this.props.flickr.result.data) {
    //   for (var i = 0; i < this.props.flickr.result.data.photos.photo.length; i++) {
    //     this.props.pingGlobe("<h3>" + this.props.flickr.result.data.photos.photo[i].title + "</h3><img class='marker-img' src=https://farm" + 
    //         this.props.flickr.result.data.photos.photo[i].farm + ".staticflickr.com/" + 
    //         this.props.flickr.result.data.photos.photo[i].server + "/" + 
    //         this.props.flickr.result.data.photos.photo[i].id + "_" + 
    //         this.props.flickr.result.data.photos.photo[i].secret + "_n.jpg/>", 
    //       this.props.flickr.globe,
    //       this.props.flickr.result.data.photos.photo[i].latitude,
    //       this.props.flickr.result.data.photos.photo[i].longitude
    //     );
    //   }
    // }
  }

  render() {
    return false;
  }
}
