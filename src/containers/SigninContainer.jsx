import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Signin } from '../components';
import { getTest } from '../store/Signin/actions';

class SigninContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTest('neeeewww'));
  }

  render() {  
    const { test } = this.props;
    return <Signin test={test} />;
  }
}

function mapStateToProps(state) {
  return {
    ...state.signin,
  };
}

export default connect(mapStateToProps)(SigninContainer);
