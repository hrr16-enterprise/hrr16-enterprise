import React, { Component } from 'react';

export default class Youtube extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps(object) {
    if (this.props.youtube.result.data) {

      const vidData = this.props.youtube.result.data;
      const vidUrl = "https://www.youtube.com/embed/" + vidData.items[0].id
      
      this.props.pingGlobe("<div class='youtubeContainer'>" + 
        "<div class='youtubeLogo'>" + 
        "<img class='youtubeImg' src='https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png'></div>" + 
        "<object style='width: 400px; height: 225px; float: none; clear: both; margin: 2px auto;' data=" + vidUrl + "></object>" + "<i class='fa fa-heart fa-2x' id='youtubeHeart' aria-hidden='true'></i>",
        this.props.youtube.globe,
        vidData.items[0].recordingDetails.location.latitude,
        vidData.items[0].recordingDetails.location.longitude,
        450,
        230,
        4
      );
    }
  }
  
  render() {
    return false;
  }
}
