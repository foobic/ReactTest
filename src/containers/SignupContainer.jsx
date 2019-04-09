import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { Signup } from '../components';
import * as ROUTES from '../routes';
import {
  updateEmail,
  updatePass,
  updatePassRepeat,
  signupWithEmail,
  loadFromLS,
} from '../store/Auth/actions';

const mapStateToProps = state => {
  return {
    auth: { ...state.auth },
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateEmail,
      updatePass,
      updatePassRepeat,
      signupWithEmail,
      loadFromLS,
      redirectToHome: () => push(ROUTES.HOME),
      redirectToAccount: () => push(ROUTES.ACCOUNT),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
