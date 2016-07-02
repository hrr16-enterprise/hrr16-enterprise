import React from 'react';
import Vivus from 'vivus';
import { Component } from 'react';
import FlickrComponent from './Flickr.jsx';
import RedditComponent from './Reddit.jsx';
import NYTimesComponent from './NYTimes.jsx';
import EventRegistryComponent from './EventRegistry.jsx';
import YoutubeComponent from './Youtube.jsx';
import YelpComponent from './Yelp.jsx';
import USGeoSurveyComponent from './USGeoSurvey.jsx';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
    // this.props.fetchButtonClickData();
  // }
  componentDidMount(){
    new Vivus('svg', {type: 'delayed', duration: 150});
  } 

  render() {
    const { result, ui, flickr, reddit, nytimes, pingGlobe, eventRegistry, youtube, yelp, usGeoSurvey } = this.props;
    return(
      <div className="result">
        <FlickrComponent flickr={flickr} pingGlobe={pingGlobe} />
        <RedditComponent reddit={reddit} />
        <NYTimesComponent nytimes={nytimes} pingGlobe={pingGlobe} />
        <EventRegistryComponent eventRegistry={eventRegistry} />
        <YoutubeComponent youtube={youtube} />
        <YelpComponent yelp={yelp} pingGlobe={pingGlobe} />
        <USGeoSurveyComponent usGeoSurvey={usGeoSurvey} />
      </div>
    )
  };
};

export default Result;
