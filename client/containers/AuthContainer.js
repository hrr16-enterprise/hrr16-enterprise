import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AuthComponent from '../components/Auth.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    // Add functions to dispatch login/logout actions
    onLoginClick: () => {
      dispatch(actions.login());
    },
    onLogOutClick: () =>{
      dispatch(actions.logout());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    ui: state.ui,
    data: state.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
