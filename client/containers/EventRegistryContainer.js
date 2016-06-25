import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import EventRegistryComponent from '../components/EventRegistry.jsx';

const mapStateToProps => ({ eventRegistry }) {
  return { eventRegistry };
}

export default connect(mapStateToProps)(EventRegistryComponent);
