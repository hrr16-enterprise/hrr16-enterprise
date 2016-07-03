import React, { Component } from 'react';

export default class Youtube extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps(object) {
    if (this.props.youtube.result.data) {

      const vidData = this.props.youtube.result.data;
      const vidUrl = "https://www.youtube.com/embed/" + vidData.items[0].id
      
      this.props.pingGlobe("<div><iframe src=" + vidUrl + " width='400' height='225' frameborder='0' allowfullscreen='true' rel='true'></iframe></div>",
        this.props.youtube.globe,
        vidData.items[0].recordingDetails.location.latitude,
        vidData.items[0].recordingDetails.location.longitude
      );
    }
  }
  
  render() {
    return false;
  };
};
