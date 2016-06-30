import React, { Component } from 'react';

export default class EventRegistry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.eventRegistry.data.recentActivity){
      const articles = this.props.eventRegistry.data.recentActivity.articles.activity;
      // Not sure what to do with these events yet
      // const events = this.props.eventRegistry.data.recentActivity.events.activity;
      return (
        <ul>
          {articles.map((article, i) =>
            <li key={i}><a href={article.url}>{article.title}</a></li>
          )}
        </ul>
      );
    }
    return (
    <div></div>
    );
  }
}
