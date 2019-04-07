import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AddIcon from '@material-ui/icons/Add';
import { SocialIcon } from 'react-social-icons';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withRouter } from 'react-router-dom';
import mainTheme from '../../assets/theme';

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
});

const Account = props => {
  const {
    classes,
    redirectToSignup,
    signinWithGoogle,
    signinWithEmail,
    state,
    openEmailDialog,
    handleCloseEmailDialog,
    onChangeEmailHandler,
    onChangePassHandler,
    auth,
  } = props;
  const iconSize = { height: 25, width: 25 };
  const { emailDialogIsOpen } = state;

  return (
    <div className={classes.fullHeight}>
      <div className={classes.options}>
        {auth.uid}
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
          onClick={openEmailDialog}>
          <SocialIcon
            network="email"
            className={classNames(classes.icon, classes.leftIcon)}
            style={iconSize}
          />
          Sign in with Email
        </Button>
        <Dialog
          open={emailDialogIsOpen}
          onClose={handleCloseEmailDialog}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sign in with Email</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              onChange={onChangeEmailHandler}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="dense"
              fullWidth
              onChange={onChangePassHandler}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEmailDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={signinWithEmail} color="secondary">
              Sign in
            </Button>
          </DialogActions>
        </Dialog>

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
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles(mainTheme))(Signin));
