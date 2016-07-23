import React, { Component } from 'react';

export default class Flickr extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * When component receives props
   * pingGlobe function is invoked to
   * populate ping for API query results
   */
  componentWillReceiveProps(object) {
    if (this.props.flickr.result.data) {
      
      for (var i = 0; i < 10; i++) {
        
        const titleWhole = this.props.flickr.result.data.photos.photo[i].title;
        const titleSlice = titleWhole.slice(0,10) + "...";
        const flickrUrl = this.props.flickr.result.data.photos.photo[i].farm + ".staticflickr.com/" +
          this.props.flickr.result.data.photos.photo[i].server + "/" +
          this.props.flickr.result.data.photos.photo[i].id + "_" +
          this.props.flickr.result.data.photos.photo[i].secret + "_q.jpg/>";
        
        this.props.pingGlobe("" +
          "<div class='flickrContainer'>" +
            //Data Render
            "<div class='flickrLogo'>" +
              "<img class='flickrImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flickr_logo.png/640px-Flickr_logo.png'>" +
            "</div>" +
            "<div>" + titleSlice + "</div>" +
            "<img src=https://farm" + flickrUrl +
            //
            "<iframe name='hiddenFrame' width='0' height='0' border='0' style='display: none;'></iframe>" +
            "<form action='/results/user/data' method='post' target='hiddenFrame'>" +
              "<input name='userID' type='hidden' value=" + JSON.parse(localStorage.getItem('profile')).clientID + ">" +
              "<input name='imageUrl' type='hidden' value=" + flickrUrl +
              "<input name='url' type='hidden' value=" + flickrUrl +
              "<button class='favoriteButton'>" +
                "<i class='fa fa-heart fa-2x' id='flickrHeart' aria-hidden='true'></i>" +
              "</button>" +
            "</form>" +
          "</div>",
          this.props.flickr.globe,
          this.props.flickr.result.data.photos.photo[i].latitude,
          this.props.flickr.result.data.photos.photo[i].longitude,
          200,
          200,
          1
        );
      }
    }
  }
  
  /**
   * Return false due to use of pingGlobe function
   */
  render() {
    return false;
  }
}
