import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { authorize } from '../store/Auth/actions';
import * as ROUTES from '../routes';
import { Signin } from '../components';

class SigninContainer extends Component {
  constructor(props) {
    super(props);
    this.signinWithGoogle = this.signinWithGoogle.bind(this);
    this.signinWithEmail = this.signinWithEmail.bind(this);
    this.openEmailDialog = this.openEmailDialog.bind(this);
    this.handleCloseEmailDialog = this.handleCloseEmailDialog.bind(this);
    this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this);
    this.onChangePassHandler = this.onChangePassHandler.bind(this);
  }

  state = {
    email: '',
    pass: '',
    emailDialogIsOpen: false,
  };

  onChangeEmailHandler(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassHandler(e) {
    this.setState({ pass: e.target.value });
  }

  handleCloseEmailDialog() {
    this.setState({ emailDialogIsOpen: false });
  }

  openEmailDialog() {
    this.setState({ emailDialogIsOpen: true });
  }

  async signinWithEmail() {
    const { firebase, authorize } = this.props;
    const { email, pass } = this.state;
    await firebase
      .signInWithEmailAndPassword(email, pass)
      .then(authedUser => {
        this.setState({ emailDialogIsOpen: false });
        authorize(authedUser.user.uid);
      })
      .catch(error => {
        // TODO: Handle error
        console.log(error);
      });
  }

  async signinWithGoogle() {
    const { firebase, authorize } = this.props;
    await firebase
      .doSignInWithGoogle()
      .then(authedUser => {
        authorize(authedUser.user.uid);
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { auth, redirectToSignup } = this.props;

    return (
      <Signin
        redirectToSignup={redirectToSignup}
        signinWithGoogle={this.signinWithGoogle}
        signinWithEmail={this.signinWithEmail}
        state={this.state}
        openEmailDialog={this.openEmailDialog}
        handleCloseEmailDialog={this.handleCloseEmailDialog}
        onChangeEmailHandler={this.onChangeEmailHandler}
        onChangePassHandler={this.onChangePassHandler}
        auth={auth}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: { ...state.auth },
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      authorize,
      redirectToHome: () => push(ROUTES.HOME),
      redirectToSignup: () => push(ROUTES.SIGN_UP),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SigninContainer);
