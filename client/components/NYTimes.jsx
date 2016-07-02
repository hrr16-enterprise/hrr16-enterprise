import React, { Component } from 'react';

export default class NYTimes extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps(object) {
    // if (this.props.nytimes.result.data) {
    //   const NYTimesData = this.props.nytimes.result.data
    //       this.props.pingGlobe("<h3>" +  
    //       'NYTimes' +        
    //       "</h3>" + 
    //       "<a href=" + "'" + NYTimesData.results[0].article_list.results[0].url + "'" + "target='_blank'" + ">" + 
    //         NYTimesData.results[0].article_list.results[0].body + 
    //         "</a>",
    //       this.props.nytimes.globe,
    //       NYTimesData.results[0].geocodes[0].latitude,
    //       NYTimesData.results[0].geocodes[0].longitude
    //     );
    // }
  }
  
  render() {    
    return false;
  }
}
