import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Signup } from '../components';
import { getTest } from '../store/Signup/actions';

class SignupContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTest('neeeewww'));
  }

  render() {  
    const { test } = this.props;
    return <Signup test={test} />;
  }
}

function mapStateToProps(state) {
  return {
    ...state.signup,
  };
}

export default connect(mapStateToProps)(SignupContainer);
