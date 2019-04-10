import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';

const QuitDialog = props => {
  const { isQuitDialogOpen, changeQuitDialogStatus, signout } = props;
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

export default QuitDialog;
