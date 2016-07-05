import React, { Component } from 'react';

export default class EventRegistry extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    if (this.props.eventRegistry.data.recentActivity) {
      for (var i = 0; i < this.props.eventRegistry.data.recentActivity.articles.activity.length; i++) {
        this.props.pingGlobe("<div class='card blue-grey darken-1' class='eventRegistryContainer'>" + 
          "<div class='eventRegistryLogo'>" + "<img class='eventRegistryImg' src='http://eventregistry.org/img/ERLogo.png'>" + 
          "<i class='fa fa-heart fa-2x' id='eventRegistryHeart' aria-hidden='true'></i></div>" + 
          "<div class='card-content white-text'>" + this.props.eventRegistry.data.recentActivity.articles.activity[i].title +
          this.props.eventRegistry.data.recentActivity.articles.activity[i].body + "<a target='_blank' href=" +
          this.props.eventRegistry.data.recentActivity.articles.activity[i].url + ">Read more</a></div></div>", 
          this.props.eventRegistry.globe,
          this.props.eventRegistry.data.recentActivity.articles.activity[i].source.location.lat,
          this.props.eventRegistry.data.recentActivity.articles.activity[i].source.location.long
        );
      }
    }
  }

  render() {
    return false;
  }
}
