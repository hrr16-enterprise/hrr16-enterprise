import * as actions from '../actions/index.js';
import { connect } from 'react-redux';
import { fetchFlickr } from '../actions/index';
import Flickr from '../components/Flickr.jsx';

// ES5 syntax below:
// function mapStateToProps({ state }) {
//   return { flickr: state.flickr };
// }

// ES6 syntax below:
function mapStateToProps({ flickr, globe }) {
  return { 
    flickr,
    globe
  };
}

export default connect(mapStateToProps)(Flickr);
