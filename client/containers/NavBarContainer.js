import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index.js';
import NavBarComponent from '../components/NavBar.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (globe) => {
      actions.clearMarkers(globe);
      dispatch(actions.fetchFlickr());
      dispatch(actions.fetchNYTimes());
      dispatch(actions.fetchEventRegistry());
      dispatch(actions.fetchYoutube());
      dispatch(actions.fetchYelp());
      dispatch(actions.fetchUSGeoSurvey());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    ui: state.ui
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
