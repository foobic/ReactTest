import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Home } from '../components';
import * as ROUTES from '../routes';
import { getTest } from '../store/Home/actions';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.handleQuitDialogOpen = this.handleQuitDialogOpen.bind(this);
    this.handleQuitDialogClose = this.handleQuitDialogClose.bind(this);
    this.uploadRedirect = this.uploadRedirect.bind(this);
    this.signout = this.signout.bind(this);
  }

  state = {
    isQuitDialogOpen: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTest('neeeewww'));
  }

  handleQuitDialogOpen() {
    console.log('Quit Dialog Opened');
    this.setState({ isQuitDialogOpen: true });
  }

  handleQuitDialogClose() {
    console.log('Quit Dialog Closed');
    this.setState({ isQuitDialogOpen: false });
  }

  signout() {
    this.setState({ isQuitDialogOpen: false });
    console.log('signout');
    // TODO: Redirect
  }

  uploadRedirect() {
    this.props.history.push(ROUTES.UPLOAD);
  }

  render() {
    const { isQuitDialogOpen } = this.state;
    return (
      <Home
        handleQuitDialogOpen={this.handleQuitDialogOpen}
        handleQuitDialogClose={this.handleQuitDialogClose}
        signout={this.signout}
        uploadRedirect={this.uploadRedirect}
        isQuitDialogOpen={isQuitDialogOpen}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.home,
  };
}

export default withRouter(connect(mapStateToProps)(HomeContainer));
