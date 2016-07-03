import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import USGeoSurveyComponent from '../components/USGeoSurvey.jsx';

const mapStateToProps = (state) => {
  return { 
  usGeoSurvey: state.usGeoSurvey,
  globe: state.globe
  };
};

export default connect(mapStateToProps)(USGeoSurveyComponent);
