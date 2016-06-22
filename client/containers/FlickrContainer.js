import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFlickr } from '../actions/index';

class FlickrImage extends Component {
  render() {
    if(!this.props.flickr.result.data){
      return (
      <div>AWAITING FETCH INVOKE...</div>
      )
    }
    
    return (
    <div><img src={'https://farm' + this.props.flickr.result.data.photos.photo[0].farm + '.staticflickr.com/' + this.props.flickr.result.data.photos.photo[0].server + '/' + this.props.flickr.result.data.photos.photo[0].id + '_' + this.props.flickr.result.data.photos.photo[0].secret + '.jpg'}/></div>
    );
  }
}

// ES5 syntax below:
// function mapStateToProps({ state }) {
//   return { flickr: state.flickr };
// }

// ES6 syntax below:
function mapStateToProps({ flickr }) {
  return { flickr };
}

export default connect(mapStateToProps)(FlickrImage);
