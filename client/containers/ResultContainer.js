import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { push } from 'react-router-redux';
import ResultComponent from '../components/Result.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchButtonClickData: () => {
    //   dispatch(actions.fetchButtonClickData());
    // }
  };
};

const mapStateToProps = (state) => {
  return {
    result: state.result,
    ui: state.ui,
    flickr: state.flickr,
    reddit: state.reddit,
    eventRegistry: state.eventRegistry
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
