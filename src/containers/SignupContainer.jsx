import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Signup } from '../components';

import actionCreators from '../store/actionCreators';
import actions from '../store/actions';
import router from '../router';

const mapStateToProps = state => {
  return {
    auth: { ...state.auth },
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...actionCreators.auth,
      ...actions.ui,
      ...router,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
