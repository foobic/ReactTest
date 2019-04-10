import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import IconButton from '@material-ui/core/IconButton/index';
import Typography from '@material-ui/core/Typography/index';
import { withStyles } from '@material-ui/core/styles/index';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import withMobileDialog from '@material-ui/core/withMobileDialog/index';
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
    const { fetchAllPictures } = this.props;
    fetchAllPictures();
  }

  render() {
    const {
      classes,
      pictures,
      removePicture,
      fetchAllPictures,
      redirectToAccount,
      redirectToUpload,
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
                onClick={fetchAllPictures}
                color="inherit">
                <DownloadIcon />
              </IconButton>
              <IconButton
                aria-owns="material-appbar"
                aria-haspopup="true"
                onClick={redirectToUpload}
                color="inherit">
                <AddIcon />
              </IconButton>
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
        {/*  Images */}
        <Gallery images={pictures.pictures} removePicture={removePicture} />
      </div>
    );
  }
}
export default withMobileDialog()(withStyles(styles(mainTheme))(Home));
