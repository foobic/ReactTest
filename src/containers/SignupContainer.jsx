import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Signup } from '../components';
import * as ROUTES from '../routes';

import { getTest } from '../store/Signup/actions';

class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.redirectToSignin = this.redirectToSignin.bind(this);
  }

  redirectToSignin() {
    this.props.history.push(ROUTES.SIGN_IN);
  }

  render() {
    const { test, firebase } = this.props;
    return <Signup test={test} redirectToSignup={this.redirectToSignin} />;
  }
}

function mapStateToProps(state) {
  return {
    ...state.signup,
  };
}

export default withRouter(connect(mapStateToProps)(SignupContainer));
