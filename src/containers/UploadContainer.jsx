import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Upload } from '../components';
import { getTest } from '../store/Upload/actions';

class UploadContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTest('neeeewww'));
  }

  render() {  
    const { test } = this.props;
    return <Upload test={test} />;
  }
}

function mapStateToProps(state) {
  return {
    ...state.upload,
  };
}

export default connect(mapStateToProps)(UploadContainer);
