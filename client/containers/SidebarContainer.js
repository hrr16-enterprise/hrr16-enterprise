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
    sidebar: state.sidebar
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);
