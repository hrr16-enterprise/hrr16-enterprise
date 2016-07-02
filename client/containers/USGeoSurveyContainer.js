import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import USGeoSurveyComponent from '../components/USGeoSurvey.jsx';

const mapStateToProps = ({ usGeoSurvey, globe }) => {
  return { 
  usGeoSurvey,
  globe
  };
};

export default connect(mapStateToProps)(USGeoSurveyComponent);
