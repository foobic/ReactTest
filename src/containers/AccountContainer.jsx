import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import {
  updateEmail,
  updatePass,
  updatePassRepeat,
  changeDialogState,
  signinWithEmail,
  signinWithGoogle,
} from '../store/Auth/actions';
import { changeQuitDialogStatus } from '../store/UI/actions';
import * as ROUTES from '../routes';
import { Account } from '../components';

const mapStateToProps = state => {
  return {
    auth: { ...state.auth },
    ui: { ...state.ui },
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateEmail,
      updatePass,
      updatePassRepeat,
      changeDialogState,
      signinWithEmail,
      signinWithGoogle,
      changeQuitDialogStatus,
      redirectToHome: () => push(ROUTES.HOME),
      redirectToSignup: () => push(ROUTES.SIGN_UP),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
