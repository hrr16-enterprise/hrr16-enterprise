import React, { Component } from 'react';

export default class Youtube extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps(object) {
    if (this.props.youtube.result.data) {

      const vidData = this.props.youtube.result.data;
      const vidUrl = "https://www.youtube.com/embed/" + vidData.items[0].id
      
      this.props.pingGlobe("<div class='card' class='youtubeContainer'>" + 
        "<div class='youtubeLogo'>" + 
        "<img class='youtubeImg' src='https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png'>" + 
        "<i class='fa fa-heart fa-2x' id='youtubeHeart' aria-hidden='true'></i></div>" + 
        "<iframe src=" + vidUrl + " width='400' height='225' frameborder='0' allowfullscreen='true' rel='true'></iframe></div>",
        this.props.youtube.globe,
        vidData.items[0].recordingDetails.location.latitude,
        vidData.items[0].recordingDetails.location.longitude,
        450,
        230
      );
    }
  }
  
  render() {
    return false;
  }
}
