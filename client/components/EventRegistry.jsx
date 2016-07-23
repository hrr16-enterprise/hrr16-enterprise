import React, { Component } from 'react';

export default class EventRegistry extends Component {
  constructor(props) {
    super(props);
  }
  
  /**
   * When component receives props
   * pingGlobe function is invoked to
   * populate ping for API query results
   */
  componentWillReceiveProps() {
    if (this.props.eventRegistry.data.recentActivity) {
      
      for (var i = 0; i < 10; i++) {
        this.props.pingGlobe("" +
          "<div class='eventRegistryContainer'>" +
            //Data Render
            "<div class='eventRegistryLogo'>" +
              "<img class='eventRegistryImg' src='https://s31.postimg.org/gn3fhjsq3/asd7dhj.png'>" +
            "</div>" +
            "<div>" +
              this.props.eventRegistry.data.recentActivity.articles.activity[i].title +
              this.props.eventRegistry.data.recentActivity.articles.activity[i].body +
              "<a target='_blank' href=" +
                this.props.eventRegistry.data.recentActivity.articles.activity[i].url +">Read more" +
              "</a>" +
            "</div>" +
            //
            "<iframe name='hiddenFrame' width='0' height='0' border='0' style='display: none;'></iframe>" +
            "<form action='/results/user/data' method='post' target='hiddenFrame'>" +
              "<input name='userID' type='hidden' value=" + JSON.parse(localStorage.getItem('profile')).clientID + ">" +
              "<input name='imageUrl' type='hidden' value='null'>" +
              "<input name='url' type='hidden' value=" + this.props.eventRegistry.data.recentActivity.articles.activity[i].url + ">" +
              "<button class='favoriteButton'>" +
                "<i class='fa fa-heart fa-2x' id='eventRegistryHeart' aria-hidden='true'></i>" +
              "</button>" +
            "</form>" +
          "</div>",
          this.props.eventRegistry.globe,
          this.props.eventRegistry.data.recentActivity.articles.activity[i].source.location.lat,
          this.props.eventRegistry.data.recentActivity.articles.activity[i].source.location.long,
          340,
          183,
          0
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
