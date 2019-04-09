import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import mainTheme from '../assets/theme';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: 'white',
    fontSize: '10em',
  },
});

class PageNotFound extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root}>404</div>;
  }
}
export default withStyles(styles(mainTheme))(PageNotFound);
