import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Signup } from '../components';
import * as ROUTES from '../routes';
import { authorize } from '../store/Auth/actions';

class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.redirectToSignin = this.redirectToSignin.bind(this);
    this.signupWithEmail = this.signupWithEmail.bind(this);
    this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this);
    this.onChangePassHandler = this.onChangePassHandler.bind(this);
    this.onChangePassRepeatHandler = this.onChangePassRepeatHandler.bind(this);
  }

  state = {
    email: '',
    pass: '',
    passRepeat: '', // TODO: Password Validation
  };

  onChangeEmailHandler(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassHandler(e) {
    this.setState({ pass: e.target.value });
  }

  onChangePassRepeatHandler(e) {
    this.setState({ passRepeat: e.target.value });
  }

  redirectToSignin() {
    this.props.history.push(ROUTES.SIGN_IN);
  }

  async signupWithEmail() {
    const { firebase, history, authorize } = this.props;
    const { email, pass } = this.state;
    await firebase
      .createUserWithEmailAndPassword(email, pass)
      .then(authedUser => {
        console.log(`User created with email: ${email} and pass: ${pass}`);
        authorize(authedUser.user.uid);
        history.push(ROUTES.HOME);
      })
      .catch(e => {
        // TODO: Handle error
        console.log('Err while signup with Email:', e);
      });
  }

  render() {
    const { test, firebase } = this.props;
    return (
      <Signup
        test={test}
        redirectToSignup={this.redirectToSignin}
        onChangeEmailHandler={this.onChangeEmailHandler}
        onChangePassHandler={this.onChangePassHandler}
        onChangePassRepeatHandler={this.onChangePassRepeatHandler}
        signupWithEmail={this.signupWithEmail}
        state={this.state}
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
  )(SignupContainer),
);
