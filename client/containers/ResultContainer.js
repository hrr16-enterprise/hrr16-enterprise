import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import ResultComponent from '../components/Result.js';
import { push } from 'react-router-redux';

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
    reddit: state.reddit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
