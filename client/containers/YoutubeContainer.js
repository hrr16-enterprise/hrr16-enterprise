import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import YoutubeComponent from '../components/Youtube.jsx';

const mapStateToProps = ({ youtube }) => {
  return { youtube };
};

export default connect(mapStateToProps)(YoutubeComponent);
