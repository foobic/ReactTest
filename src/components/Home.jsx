import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import IconButton from '@material-ui/core/IconButton/index';
import Typography from '@material-ui/core/Typography/index';
import { withStyles } from '@material-ui/core/styles/index';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Fab from '@material-ui/core/Fab/index';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button/index';
import Dialog from '@material-ui/core/Dialog/index';
import DialogActions from '@material-ui/core/DialogActions/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import DialogContentText from '@material-ui/core/DialogContentText/index';
import DialogTitle from '@material-ui/core/DialogTitle/index';
import withMobileDialog from '@material-ui/core/withMobileDialog/index';
import HomeIcon from '@material-ui/icons/Home';
import classNames from 'classnames';
import Gallery from './Gallery';
import mainTheme from '../assets/theme';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'block',
  },
  sectionDesktop: {
    display: 'flex',
  },
  fab: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  hidden: {
    display: 'none',
  },
});

class Home extends Component {
  componentDidMount() {
    document.title = 'Home';
    this.props.fetchAllPictures();
  }

  render() {
    const {
      changeQuitDialogStatus,
      redirectToUpload,
      ui,
      classes,
      fullScreen,
      pictures,
      removePicture,
      redirectToAccount,
    } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap>
              Photos
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns="material-appbar"
                aria-haspopup="true"
                onClick={redirectToAccount}
                color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.fab}
          onClick={redirectToUpload}>
          <AddIcon />
        </Fab>

        {/*  Images */}
        <Gallery images={pictures.pictures} removePicture={removePicture} />
      </div>
    );
  }
}
export default withMobileDialog()(withStyles(styles(mainTheme))(Home));
