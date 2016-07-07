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
        
      this.props.pingGlobe("" +
        "<div class='usgsContainer'>" + 
          //Data Render
          "<div class='usgsLogo'>" + 
            "<img class='usgsImg' src='https://upload.wikimedia.org/wikipedia/commons/0/08/USGS_logo.png'>" + 
          "</div>" + 
          "<p><strong>" + 'Recent earthquake: ' + "</strong></p><p>" + 'Coords: ' + latestQuakes.geometry.coordinates[0] + ", " + latestQuakes.geometry.coordinates[1] + "</p><p>" + 'Location: ' + latestQuakes.properties.place + "</p><p>" + 'Magnitude: ' + latestQuakes.properties.mag + "</p><p>" + 'Time of occurrence: ' + time + "</p>" + 
          //
          "<iframe name='hiddenFrame' width='0' height='0' border='0' style='display: none;'></iframe>" +
          "<form action='/results/user/data' method='post' target='hiddenFrame'>" +
            "<input name='userID' type='hidden' value=" + JSON.parse(localStorage.getItem('profile')).clientID + ">" +
            "<input name='imageUrl' type='hidden' value='null'>" +
            "<input name='url' type='hidden' value=" + latestQuakes.properties.url + ">" +
            "<button class='favoriteButton'>" +
              "<i class='fa fa-heart fa-2x' id='usgsHeart' aria-hidden='true'></i>" +
            "</button>" +
          "</form>" +
        "</div>",
        this.props.usGeoSurvey.globe,
        latestQuakes.geometry.coordinates[0],
        latestQuakes.geometry.coordinates[1],
        250,
        230,
        5
      );
    }
  }
  
  render() {
    return false;
  }
}
