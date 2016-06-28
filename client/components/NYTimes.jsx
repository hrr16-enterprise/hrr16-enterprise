import React, { Component } from 'react';

export default class NYTimes extends Component {
  constructor(props) {
    super(props);
  }

  // For future pings
  // 
  // componentWillReceiveProps(object) {
  // }
    componentWillReceiveProps(object) {
    if (this.props.nytimes.result.data) {
      console.log("this is NYTIMES: ", this.props.nytimes.result.data.results);
    }
  }

  render() {
    if (!this.props.nytimes.result.data) {
      return (
      <div>AWAITING FETCH INVOKE (NY Times)...</div>
      );
    }
    
    return (
      <div>
        NY Times Latitude: {this.props.nytimes.result.data.results[0].geocodes[0].latitude}
        NY Times Longitude: {this.props.nytimes.result.data.results[0].geocodes[0].longitude}
        NY Times URL: {this.props.nytimes.result.data.results[0].article_list.results[0].url}
        NY Times Body: {this.props.nytimes.result.data.results[0].article_list.results[0].title}
        NY Times Title: {this.props.nytimes.result.data.results[0].article_list.results[0].body}
      </div>
    );
  }
}
