import React from 'react';
import ImageUploader from 'react-images-upload';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '95%',
    margin: '5% auto',
    background: 'white',
    borderRadius: 20,
  },
  progressRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  btnContainer: {
    width: '100%',
    margin: '0 auto',
    paddingBottom: '20px',
    display: 'flex',
  },
  btn: {
    display: 'block',
    minWidth: '15%',
    margin: '0 auto',
  },
  circularProgress: {
    width: '25% !important',
    height: '25% !important',
    [theme.breakpoints.up('sm')]: {
      width: '10% !important',
      height: '10% !important',
    },
    // margin: theme.spacing.unit * 5,
    // paddingTop: '20%',
  },
});

const Upload = props => {
  const {
    onDrop,
    classes,
    upload,
    isUploading,
    pictures,
    redirectToHome,
  } = props;

  if (isUploading) {
    return (
      <div className={classes.progressRoot}>
        <CircularProgress className={classes.circularProgress} />
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <ImageUploader
        withIcon
        buttonText="Choose images"
        onChange={onDrop}
        withPreview
        withLabel
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
      />
      <div className={classes.btnContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={redirectToHome}
          className={classes.btn}>
          Go Home
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={upload}
          disabled={pictures.length === 0}
          className={classes.btn}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default withSnackbar(withStyles(styles)(Upload));
