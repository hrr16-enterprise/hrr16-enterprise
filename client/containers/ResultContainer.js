import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { push } from 'react-router-redux';
import ResultComponent from '../components/Result.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    pingGlobe: (globe, lat, lng) => {
      dispatch(actions.pingGlobe(globe, lat, lng));
    }
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
    nytimes: state.nytimes,
    eventRegistry: state.eventRegistry,
    youtube: state.youtube
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
