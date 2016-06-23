import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import NavBarComponent from '../components/NavBar';

const mapDispatchToProps = (dispatch) => {
  return {
    // Add functions to dispatch login/logout actions
    
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    ui: state.ui
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
