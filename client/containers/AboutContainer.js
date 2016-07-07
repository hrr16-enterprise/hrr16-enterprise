import { connect } from 'react-redux';
import * as actions from '../actions/index';
import AboutComponent from '../components/About.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    showAbout: () => {
      dispatch(actions.showAbout());
    },
    hideAbout: () => {
      dispatch(actions.hideAbout());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    about: state.about
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutComponent);
