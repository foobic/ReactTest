import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/ExitToApp';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

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

const Home = props => {
  const {
    classes,
    isQuitDialogOpen,
    handleQuitDialogOpen,
    handleQuitDialogClose,
    fullScreen,
    signout,
    uploadRedirect,
  } = props;

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
              onClick={handleQuitDialogOpen}
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
        onClick={uploadRedirect}>
        <AddIcon />
      </Fab>

      {/* Quit Dialog */}
      <Dialog
        fullScreen={fullScreen}
        open={isQuitDialogOpen}
        onClose={handleQuitDialogClose}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">Sign out</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to sign out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleQuitDialogClose}>No</Button>
          <Button onClick={signout} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default withMobileDialog()(withStyles(styles)(Home));
