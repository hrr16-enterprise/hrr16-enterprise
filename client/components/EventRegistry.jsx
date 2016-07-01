import React, { Component } from 'react';

export default class EventRegistry extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    if (this.props.eventRegistry.data.recentActivity) {
      for (var i = 0; i < this.props.eventRegistry.data.recentActivity.articles.activity.length; i++) {
        this.props.pingGlobe("<h3>" + this.props.eventRegistry.data.recentActivity.articles.activity[i].title + "</h3><div>" +
          this.props.eventRegistry.data.recentActivity.articles.activity[i].body + "<a target='_blank' href=" +
          this.props.eventRegistry.data.recentActivity.articles.activity[i].url + ">Read more</a></div>", 
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
