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
    const { result, ui, flickr, reddit, nytimes, globe, pingGlobe, eventRegistry, youtube, yelp, usGeoSurvey } = this.props;
    return(
      <div className="result">
        <FlickrComponent flickr={flickr} pingGlobe={pingGlobe} />
        <NYTimesComponent nytimes={nytimes} pingGlobe={pingGlobe} />
        <EventRegistryComponent eventRegistry={eventRegistry} pingGlobe={pingGlobe} />
        <YelpComponent yelp={yelp} pingGlobe={pingGlobe} />
        <YoutubeComponent youtube={youtube} pingGlobe={pingGlobe} />
        <USGeoSurveyComponent usGeoSurvey={usGeoSurvey} pingGlobe={pingGlobe} />
        <RedditComponent reddit={reddit} />
      </div>
    )
  };
};

export default Result;
