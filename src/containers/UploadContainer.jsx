import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import { withRouter } from 'react-router-dom';
import { Upload } from '../components';
import { getTest } from '../store/Upload/actions';
import * as ROUTES from '../routes';

class UploadContainer extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.upload = this.upload.bind(this);
    this.redirectToHome = this.redirectToHome.bind(this);
    this.putStorageItem = this.putStorageItem.bind(this);
  }

  state = {
    pictures: [],
    isUploading: false,
  };

  componentDidMount() {
    const { dispatch, firebase } = this.props;
    dispatch(getTest('neeeewww'));
    console.log(firebase);
  }

  onDrop(picture) {
    const { pictures } = this.state;
    this.setState({
      pictures: pictures.concat(picture),
    });
  }

  putStorageItem(item) {
    const { firebase, uid, enqueueSnackbar } = this.props;
    // the return value will be a Promise
    return firebase.storage
      .ref(`${uid}/${item.name}`)
      .put(item)
      .then(snapshot => {
        enqueueSnackbar(`${item.name} successfully uploaded.`, {
          variant: 'success',
        });
      })
      .catch(error => {
        enqueueSnackbar(`${item.name} uploading failed.`, {
          variant: 'error',
        });
      });
  }

  redirectToHome() {
    this.props.history.push(ROUTES.HOME);
  }

  upload() {
    this.setState({ isUploading: true });
    const { pictures } = this.state;
    Promise.all(
      // Array of "Promises"
      pictures.map(item => this.putStorageItem(item)),
    )
      .then(url => {
        console.log(`All success ${url}`);
      })
      .catch(error => {
        console.log(`Some failed: `, error.message);
      })
      .finally(() => {
        this.setState({ isUploading: false });
      });
  }

  render() {
    const { pictures, isUploading } = this.state;
    return (
      <Upload
        onDrop={this.onDrop}
        upload={this.upload}
        redirectToHome={this.redirectToHome}
        isUploading={isUploading}
        pictures={pictures}
      />
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    ...state.auth,
    ...state.upload,
  };
}

export default withRouter(
  withSnackbar(connect(mapStateToProps)(UploadContainer)),
);
