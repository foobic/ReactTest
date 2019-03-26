import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Signin } from '../components';
import * as ROUTES from '../routes';

import { getTest } from '../store/Signin/actions';

class SigninContainer extends Component {
  constructor(props) {
    super(props);
    this.redirectToSignup = this.redirectToSignup.bind(this);
  }

  redirectToSignup() {
    this.props.history.push(ROUTES.SIGN_UP);
  }

  render() {
    const { test, firebase } = this.props;
    return <Signin test={test} redirectToSignup={this.redirectToSignup} />;
  }
}

function mapStateToProps(state) {
  return {
    ...state.signin,
  };
}

export default withRouter(connect(mapStateToProps)(SigninContainer));
