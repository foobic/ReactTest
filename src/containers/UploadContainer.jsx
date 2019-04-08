import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { Upload } from '../components';
import * as ROUTES from '../routes';
import { setPictures, resetPictures, upload } from '../store/Pictures/actions';

const mapStateToProps = state => {
  return {
    pictures: { ...state.pictures },
    ui: { ...state.ui },
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setPictures,
      resetPictures,
      upload,
      redirectToHome: () => push(ROUTES.HOME),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Upload);
