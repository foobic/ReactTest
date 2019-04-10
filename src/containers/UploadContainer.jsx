import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Upload } from '../components';

import actionCreators from '../store/actionCreators';
import router from '../router';

const mapStateToProps = state => {
  return {
    pictures: { ...state.pictures },
    ui: { ...state.ui },
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actionCreators.pictures,
      ...router,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Upload);
