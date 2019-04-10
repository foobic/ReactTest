import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Home } from '../components';

import actionCreators from '../store/actionCreators';
import router from '../router';

const mapStateToProps = state => {
  return {
    ui: { ...state.ui },
    pictures: { ...state.pictures },
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
)(Home);
