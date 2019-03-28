import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Signin } from '../components';
import * as ROUTES from '../routes';

import { authorize } from '../store/Auth/actions';

class SigninContainer extends Component {
  constructor(props) {
    super(props);
    this.redirectToSignup = this.redirectToSignup.bind(this);
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

  redirectToSignup() {
    this.props.history.push(ROUTES.SIGN_UP);
  }

  handleCloseEmailDialog() {
    this.setState({ emailDialogIsOpen: false });
  }

  openEmailDialog() {
    this.setState({ emailDialogIsOpen: true });
  }

  async signinWithEmail() {
    const { firebase, history, authorize } = this.props;
    const { email, pass } = this.state;
    await firebase
      .signInWithEmailAndPassword(email, pass)
      .then(authedUser => {
        this.setState({ emailDialogIsOpen: false });
        authorize(authedUser.user.uid);
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        // TODO: Handle error
        console.log(error);
      });
  }

  async signinWithGoogle() {
    const { firebase, history, authorize } = this.props;
    await firebase
      .doSignInWithGoogle()
      .then(authedUser => {
        authorize(authedUser.user.uid);
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { test, firebase } = this.props;
    return (
      <Signin
        test={test}
        redirectToSignup={this.redirectToSignup}
        signinWithGoogle={this.signinWithGoogle}
        signinWithEmail={this.signinWithEmail}
        state={this.state}
        openEmailDialog={this.openEmailDialog}
        handleCloseEmailDialog={this.handleCloseEmailDialog}
        onChangeEmailHandler={this.onChangeEmailHandler}
        onChangePassHandler={this.onChangePassHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.auth,
  };
};

const mapDispatchToProps = dispatch => ({
  authorize: uid => {
    dispatch(authorize(uid));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SigninContainer),
);
