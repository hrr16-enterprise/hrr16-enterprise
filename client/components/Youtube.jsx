import React, { Component } from 'react';

export default class Youtube extends Component {
  constructor(props) {
    super(props);
  }
  
  /**
   * When component receives props
   * pingGlobe function is invoked to
   * populate ping for API query results
   */
  componentWillReceiveProps(object) {
    if (this.props.youtube.result.data) {
      const vidData = this.props.youtube.result.data;
      const vidUrl = "https://www.youtube.com/embed/" + vidData.items[0].id;
      const youtubeUrl = "https://www.youtube.com/watch?v=" + vidData.items[0].id;
      
      this.props.pingGlobe("" +
        "<div class='youtubeContainer'>" +
          //Data Render
          "<div class='youtubeLogo'>" +
            "<img class='youtubeImg' src='https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png'>" +
          "</div>" +
          "<object style='width: 400px; height: 225px; float: none; clear: both; margin: 2px auto;' data=" + vidUrl + "></object>" +
          //
          "<iframe name='hiddenFrame' width='0' height='0' border='0' style='display: none;'></iframe>" +                         
          "<form action='/results/user/data' method='post' target='hiddenFrame'>" +
            "<input name='userID' type='hidden' value=" + JSON.parse(localStorage.getItem('profile')).clientID + ">" +
            "<input name='imageUrl' type='hidden' value='null'>" +
            "<input name='url' type='hidden' value=" + youtubeUrl + ">" +
            "<button class='favoriteButton'>" +
              "<i class='fa fa-heart fa-2x' id='youtubeHeart' aria-hidden='true'></i>" +
            "</button>" +
          "</form>" +
        "</div>",
        this.props.youtube.globe,
        vidData.items[0].recordingDetails.location.latitude,
        vidData.items[0].recordingDetails.location.longitude,
        450,
        230,
        4
      );
    }
  }
  
  /**
   * Return false due to use of pingGlobe function
   */
  render() {
    return false;
  }
}
