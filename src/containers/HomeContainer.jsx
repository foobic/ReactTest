import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Home } from '../components';
import { getTest } from '../store/Home/actions';

class HomeContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTest('neeeewww'));
  }

  render() {
    const { test } = this.props;
    return <Home test={test} />;
  }
}

function mapStateToProps(state) {
  return {
    ...state.home,
  };
}

export default connect(mapStateToProps)(HomeContainer);
