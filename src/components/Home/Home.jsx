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
import Gallery from '../common/Gallery';
import mainTheme from '../../assets/theme';
import Loader from '../common/Loader';
import styles from './styles';

class Home extends Component {
  componentDidMount() {
    document.title = 'Home';
  }

  render() {
    const {
      classes,
      pictures,
      removePicture,
      fetchAllPictures,
      redirectToAccount,
      redirectToUpload,
      ui,
    } = this.props;

    if (ui.isLoading) return <Loader active />;

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
        <Gallery images={pictures.pictures} removePicture={removePicture} />
      </div>
    );
  }
}
export default withMobileDialog()(withStyles(styles(mainTheme))(Home));
