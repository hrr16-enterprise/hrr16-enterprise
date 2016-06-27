import React from 'react';
import { Component } from 'react';
import FlickrComponent from './Flickr.jsx';
import RedditComponent from './Reddit.jsx';
import NYTimesComponent from './NYTimes.jsx';
import EventRegistryComponent from './EventRegistry.jsx';
import YoutubeComponent from './Youtube.jsx';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
    // this.props.fetchButtonClickData();
  // }

  render() {
    const { result, ui, flickr, reddit, nytimes, pingGlobe, eventRegistry, youtube } = this.props;
    return(
      <div>
        <FlickrComponent flickr={flickr} pingGlobe={pingGlobe} />
        <RedditComponent reddit={reddit} />
        <NYTimesComponent nytimes={nytimes} />
        <EventRegistryComponent eventRegistry={eventRegistry} />
        <YoutubeComponent youtube={youtube} />
      </div>
    )
  };
};

export default Result;
