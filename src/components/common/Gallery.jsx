import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import ReacGridGallery from 'react-grid-gallery';
import mainTheme from '../../assets/theme';

const styles = theme => ({
  root: {
    width: '95%',
    margin: '10px auto',
  },
});

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.onCurrentImageChange = this.onCurrentImageChange.bind(this);
    this.deletePicture = this.deletePicture.bind(this);
  }

  state = {
    curPicture: 0,
  };

  onCurrentImageChange(index) {
    this.setState({ curPicture: index });
  }

  deletePicture() {
    const { removePicture } = this.props;
    const { curPicture } = this.state;
    removePicture(curPicture);
  }

  render() {
    const { classes, images } = this.props;

    return (
      <div className={classes.root}>
        <ReacGridGallery
          images={images}
          enableLightbox
          enableImageSelection={false}
          currentImageWillChange={this.onCurrentImageChange}
          margin={3}
          customControls={[
            <button key="deleteImage" onClick={this.deletePicture}>
              Delete Image
            </button>,
          ]}
        />{' '}
      </div>
    );
  }
}

export default withStyles(styles(mainTheme))(Gallery);
