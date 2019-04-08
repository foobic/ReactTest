import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { Home } from '../components';
import * as ROUTES from '../routes';
import { changeQuitDialogStatus } from '../store/UI/actions';

const mapStateToProps = state => {
  return {
    ui: { ...state.ui },
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeQuitDialogStatus,
      redirectToUpload: () => push(ROUTES.UPLOAD),
      redirectToSignup: () => push(ROUTES.SIGN_UP),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
