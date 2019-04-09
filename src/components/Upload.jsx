import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import { withStyles } from '@material-ui/core/styles/index';
import Button from '@material-ui/core/Button/index';
import mainTheme from '../assets/theme';
import Loader from './Loader';

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
  },
});

class Upload extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    document.title = 'Upload';
  }

  onDrop(picture) {
    const { setFiles } = this.props;
    const files = this.props.pictures.files.concat(picture);
    setFiles(files);
  }

  render() {
    const {
      classes,
      upload,
      pictures,
      redirectToHome,
      firebase,
      ui,
    } = this.props;

    if (ui.isLoading) {
      return (
        <Loader type="Oval" color={mainTheme.white} height={80} width={80} />
      );
    }

    return (
      <div className={classes.root}>
        <ImageUploader
          withIcon
          buttonText="Choose images"
          onChange={this.onDrop}
          withPreview
          withLabel
          imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
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
  }
}

export default withStyles(styles(mainTheme))(Upload);
