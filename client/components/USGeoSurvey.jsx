import React, { Component } from 'react';
import moment from 'moment';

export default class USGeoSurvey extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (!this.props.usGeoSurvey.result.features) {
      return (
        <div>Here lies dirt...</div>
      );
    }
    
    const latestQuakes = this.props.usGeoSurvey.result.features[0];
    const timestamp = moment(latestQuakes.properties.time);
    
    return (
      <div>
        <p><strong>Recent earthquake:</strong></p>
        <p>Coords: {latestQuakes.geometry.coordinates[0] + ', ' + latestQuakes.geometry.coordinates[1]}</p>
        <p>Location: {latestQuakes.properties.place}</p>
        <p>Magnitude: {latestQuakes.properties.mag}</p>
        <p>Time of occurence: {timestamp.format('MMMM Do YYYY, h:mm:ss a')}</p>
      </div>
    );
  }
}
