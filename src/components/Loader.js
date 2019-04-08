import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import ReactLoader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import mainTheme from '../assets/theme';
import { changeLoaderStatus } from '../store/UI/actions';

const styles = theme => ({
  loader: {
    textAlign: 'center',
    margin: 20,
    boxSizing: 'border-box',
  },
  displayNone: {
    display: 'none',
  },
});

class Loader extends Component {
  render() {
    const { classes, type, color, height, width } = this.props;
    const { ui } = this.props;

    return (
      <div className={ui.isLoading ? classes.loader : classes.displayNone}>
        <ReactLoader type={type} color={color} height={height} width={width} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ui: { ...state.ui },
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeLoaderStatus,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles(mainTheme))(Loader));
