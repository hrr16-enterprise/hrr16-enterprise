import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import YoutubeComponent from '../components/Youtube.jsx';

const mapStateToProps = ({ youtube, globe }) => {
  return { 
    youtube,
    globe
  };
};

export default connect(mapStateToProps)(YoutubeComponent);
