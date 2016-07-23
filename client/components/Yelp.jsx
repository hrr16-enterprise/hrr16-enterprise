import React, { Component } from 'react';

export default class Yelp extends Component {
  constructor(props) {
    super(props);
  }
  
  /**
   * When component receives props
   * pingGlobe function is invoked to
   * populate ping for API query results
   */
  componentWillReceiveProps(object) {
    if (this.props.yelp.result.data) {
      const YelpData = this.props.yelp.result.data;
      
      for (let i = 0; i < YelpData.length; i++) {
        this.props.pingGlobe("" +
          "<div class='yelpContainer'>" +
            //Data Render
            "<div class='yelpLogo'>" +
              "<img class='yelpImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1024px-Yelp_Logo.svg.png'>" +
            "</div>" +
            "<a href=\'" + YelpData[i].url + "\'target='_blank'>" + YelpData[i].name + "</a>" + 
            "<div><img src=\'" + YelpData[i].image_url + "\''></div>" +
            "<div><img src=\'" + YelpData[i].rating_img_url + "\''></div>" +
            "<div>" + YelpData[i].deals[0].options[0].title + "</div>" +
            "" + (Math.floor(YelpData[i].distance)*0.0006).toFixed(2) + " mi away" +
            //
            "<iframe name='hiddenFrame' width='0' height='0' border='0' style='display: none;'></iframe>" +
            "<form action='/results/user/data' method='post' target='hiddenFrame'>" +
              "<input name='userID' type='hidden' value=" + JSON.parse(localStorage.getItem('profile')).clientID + ">" +
              "<input name='imageUrl' type='hidden' value=" + YelpData[i].image_url + ">" +
              "<input name='url' type='hidden' value=" + YelpData[i].url + ">" +
              "<button class='favoriteButton'>" +
                "<i class='fa fa-heart fa-2x' id='yelpHeart' aria-hidden='true'></i>" +
              "</button>" +
            "</form>" +
          "</div>",
          this.props.yelp.globe,
          YelpData[i].location.coordinate.latitude,
          YelpData[i].location.coordinate.longitude,
          200,
          200,
          3
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
