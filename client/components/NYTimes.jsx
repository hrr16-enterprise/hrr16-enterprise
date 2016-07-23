import React, { Component } from 'react';

export default class NYTimes extends Component {
  constructor(props) {
    super(props);
  }
  
  /**
   * When component receives props
   * pingGlobe function is invoked to
   * populate ping for API query results
   */
  componentWillReceiveProps(object) {
    if (this.props.nytimes.result.data) {
      const NYTimesData = this.props.nytimes.result.data
      const NYTimesUrl = NYTimesData.results[0].article_list.results[0].url;
      
        this.props.pingGlobe("" +
          "<div class='nyTimesContainer'>" +
            //Data Render
            "<div class='nyTimesLogo'>" +
              "<img class='nyTimesImg' src='https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png'>" +
            "</div>" +
            "<a href=" + NYTimesUrl + "target='_blank'>" + NYTimesData.results[0].article_list.results[0].body + "</a>" +
            //
            "<iframe name='hiddenFrame' width='0' height='0' border='0' style='display: none;'></iframe>" +
            "<form action='/results/user/data' method='post' target='hiddenFrame'>" +
              "<input name='userID' type='hidden' value=" + JSON.parse(localStorage.getItem('profile')).clientID + ">" +
              "<input name='imageUrl' type='hidden' value='null'>" +
              "<input name='url' type='hidden' value=" + NYTimesUrl + ">" +
              "<button class='favoriteButton'>" +
                "<i class='fa fa-heart fa-2x' id='nyTimesHeart' aria-hidden='true'></i>" +
              "</button>" +
            "</form>" +
          "</div>",
        this.props.nytimes.globe,
        NYTimesData.results[0].geocodes[0].latitude,
        NYTimesData.results[0].geocodes[0].longitude,
        200,
        200,
        2
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
