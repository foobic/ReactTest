import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const EmailDialog = props => {
  const {
    email,
    pass,
    emailDialogIsOpen,
    changeDialogState,
    updateEmail,
    updatePass,
    signinWithEmail,
  } = props;
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

export default EmailDialog;
