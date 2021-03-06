import * as actions from '../actions/index.js';
import { connect } from 'react-redux';
import { fetchNYTimes } from '../actions/index';
import NYTimes from '../components/NYTimes.jsx';

// ES5 syntax below:
// function mapStateToProps({ state }) {
//   return { flickr: state.flickr };
// }

// ES6 syntax below:
function mapStateToProps(state) {
  return { 
      nytimes: state.nytimes,
      globe: state.globe
   };
}

export default connect(mapStateToProps)(NYTimes);
