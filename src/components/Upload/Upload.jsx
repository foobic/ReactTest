import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import { withStyles } from '@material-ui/core/styles/index';
import Button from '@material-ui/core/Button/index';
import mainTheme from '../../assets/theme';
import Loader from '../common/Loader';
import styles from './styles';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    document.title = 'Upload';
  }

  onDrop(picture) {
    const { setFiles, pictures } = this.props;
    const files = pictures.files.concat(picture);
    setFiles(files);
  }

  render() {
    const { classes, upload, pictures, redirectToHome, ui } = this.props;

    if (ui.isLoading) return <Loader active />;

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
