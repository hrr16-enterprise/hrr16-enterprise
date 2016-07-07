import React, { Component } from 'react';

export default class NYTimes extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps(object) {
    if (this.props.nytimes.result.data) {
      
      const NYTimesData = this.props.nytimes.result.data
      
        this.props.pingGlobe("<div class='nyTimesContainer'><div class='nyTimesLogo'><img class='nyTimesImg' src='https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png'></div>" +  
          "<a href=" + "'" + NYTimesData.results[0].article_list.results[0].url + "'" + "target='_blank'" + ">" + 
          NYTimesData.results[0].article_list.results[0].body + 
          "</a></div>" +
          "<i class='fa fa-heart fa-2x' id='nyTimesHeart' aria-hidden='true'></i>",
        this.props.nytimes.globe,
        NYTimesData.results[0].geocodes[0].latitude,
        NYTimesData.results[0].geocodes[0].longitude,
        200,
        200,
        2
      );
    }
  }
  
  render() {    
    return false;
  }
}
