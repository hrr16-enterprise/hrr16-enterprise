import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import GlobeComponent from '../components/Globe.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    instantiateGlobe: () => {
      dispatch(actions.instantiateGlobe());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    globe: state.globe,
    auth: state.auth,
    ui: state.ui
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobeComponent);
