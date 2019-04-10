import React, { Component } from 'react';
import Button from '@material-ui/core/Button/index';
import { withStyles } from '@material-ui/core/styles/index';
import classNames from 'classnames';
import AddIcon from '@material-ui/icons/Add';
import QuitIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { SocialIcon } from 'react-social-icons';
import TextField from '@material-ui/core/TextField/index';
import Dialog from '@material-ui/core/Dialog/index';
import DialogActions from '@material-ui/core/DialogActions/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import DialogTitle from '@material-ui/core/DialogTitle/index';
import DialogContentText from '@material-ui/core/DialogContentText';
import mainTheme from '../assets/theme';
import Loader from './common/Loader';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  icon: {
    width: 25,
    height: 25,
  },
  leftIcon: {
    color: theme.palette.secondary.dark,
    marginRight: theme.spacing.unit,
  },
  fullHeight: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 500,
    minWidth: 250,
    padding: '20px 20px',
    borderRadius: '10px',
    margin: '0 auto',
    background: 'white',
  },
  delimiter: {
    width: '100%',
    background: theme.palette.primary.main,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  displayNone: {
    display: 'none',
  },
});

class Account extends Component {
  componentDidMount() {
    document.title = 'Account';
    const { auth, loadFromLS } = this.props;
    if (!auth.user) loadFromLS();
  }

  render() {
    const {
      classes,
      signinWithGoogle,
      signinWithEmail,
      updateEmail,
      updatePass,
      changeDialogState,
      changeQuitDialogStatus,
      signout,
      redirectToHome,
      redirectToSignup,
      ui,
      auth,
    } = this.props;
    const iconSize = { height: 25, width: 25 };
    const { email, pass, user } = auth;
    const { isQuitDialogOpen, emailDialogIsOpen } = ui;

    if (ui.isLoading) return <Loader active />;

    const emailDialog = () => {
      return (
        <Dialog
          open={emailDialogIsOpen}
          onClose={() => changeDialogState(false)}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sign in with Email</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={e => updateEmail(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="dense"
              fullWidth
              value={pass}
              onChange={e => updatePass(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => changeDialogState(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={signinWithEmail} color="secondary">
              Sign in
            </Button>
          </DialogActions>
        </Dialog>
      );
    };

    const quitDialog = () => {
      return (
        <Dialog
          fullScreen
          open={isQuitDialogOpen}
          onClose={() => changeQuitDialogStatus(false)}
          aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title">Sign out</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to sign out?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => changeQuitDialogStatus(false)}>No</Button>
            <Button onClick={signout} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      );
    };

    return (
      <div className={classes.fullHeight}>
        <div className={classes.options}>
          {!user && (
            <React.Fragment>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={signinWithGoogle}>
                <SocialIcon
                  network="google"
                  className={classNames(classes.icon, classes.leftIcon)}
                  style={iconSize}
                />
                Sign in with Google
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => changeDialogState(true)}>
                <SocialIcon
                  network="email"
                  className={classNames(classes.icon, classes.leftIcon)}
                  style={iconSize}
                />
                Sign in with Email
              </Button>
              {emailDialog()}
              <hr className={classes.delimiter} />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={redirectToSignup}>
                <AddIcon
                  className={classNames(classes.extendedIcon, classes.leftIcon)}
                />
                Sign up with Email
              </Button>
            </React.Fragment>
          )}

          {user && (
            <React.Fragment>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => changeQuitDialogStatus(true)}>
                <QuitIcon
                  className={classNames(classes.extendedIcon, classes.leftIcon)}
                />
                Quit
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={redirectToHome}>
                <HomeIcon
                  className={classNames(classes.extendedIcon, classes.leftIcon)}
                />
                Home
              </Button>
              {quitDialog()}
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles(mainTheme))(Account);
