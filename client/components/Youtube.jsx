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
    // if (!this.props.youtube.result.data) {
    //   return (
    //     <div></div>
    //   );
    // }
    
    // const vidData = this.props.youtube.result.data;
    // return (
      // <div>
      //   <iframe id="youtubeVid1" src={'https://www.youtube.com/embed/' + vidData.items[0].id} width="600" height="338" frameborder="0" allowfullscreen="true" rel="true"></iframe>
      // </div>
    // );
  };
};
