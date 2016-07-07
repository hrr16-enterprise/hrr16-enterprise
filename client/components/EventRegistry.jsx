import React, { Component } from 'react';

export default class EventRegistry extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    if (this.props.eventRegistry.data.recentActivity) {
      // this.props.eventRegistry.data.recentActivity.articles.activity.length
      for (var i = 0; i < 3; i++) {
        this.props.pingGlobe("<div class='eventRegistryContainer'>" + 
          "<div class='eventRegistryLogo'>" + "<img class='eventRegistryImg' src='https://s31.postimg.org/gn3fhjsq3/asd7dhj.png'>" + 
          "</div>" + 
          "<div class='card-content'>" + this.props.eventRegistry.data.recentActivity.articles.activity[i].title +
          this.props.eventRegistry.data.recentActivity.articles.activity[i].body + "<a target='_blank' href=" +
          this.props.eventRegistry.data.recentActivity.articles.activity[i].url + ">Read more</a></div>" +
          "<i class='fa fa-heart fa-2x' id='eventRegistryHeart' aria-hidden='true'></i></div>", 
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

  render() {
    return false;
  }
}
