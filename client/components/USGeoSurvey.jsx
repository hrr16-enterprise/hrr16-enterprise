import React, { Component } from 'react';
import moment from 'moment';

export default class USGeoSurvey extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps(object) {
    if (this.props.usGeoSurvey.result.features) {

      const latestQuakes = this.props.usGeoSurvey.result.features[0];
      const timestamp = moment(latestQuakes.properties.time);
      const time = timestamp.format('MMMM Do YYYY, h:mm:ss a');
        
      this.props.pingGlobe("<div><p><strong>" + 'Recent earthquake: ' + "</strong></p><p>" + 'Coords: ' + latestQuakes.geometry.coordinates[0] + ", " + latestQuakes.geometry.coordinates[1] + "</p><p>" + 'Location: ' + latestQuakes.properties.place + "</p><p>" + 'Magnitude: ' + latestQuakes.properties.mag + "</p><p>" + 'Time of occurrence: ' + time + "</p></div>",
        this.props.usGeoSurvey.globe,
        latestQuakes.geometry.coordinates[0],
        latestQuakes.geometry.coordinates[1]
        
      );
    }
  }
  
  render() {
    return false;
  }
}
