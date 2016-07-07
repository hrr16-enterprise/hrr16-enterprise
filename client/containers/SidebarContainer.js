import { connect } from 'react-redux';
import * as actions from '../actions/index';
import SidebarComponent from '../components/Sidebar.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    showSidebar: () => {
      dispatch(actions.showSidebar());
    },
    hideSidebar: () => {
      dispatch(actions.hideSidebar());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    ui: state.ui,
    sidebar: state.sidebar,
    auth: state.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);
