import { sha256 } from 'js-sha256';
import notifications from '../notifications';
import actions from '../actions';
import { firebase } from '../../firebase';
import { getImageDimensionsByUrl } from '../../helpers';

const putStorageOne = async (dispatch, file, uid, filename) => {
  try {
    const randomHash = sha256(Math.random().toString());
    await firebase.storage.ref(`${uid}/${randomHash}`).put(file);
    const getDownloadUrl = await firebase.storage
      .ref(`${uid}/${randomHash}`)
      .getDownloadURL();
    const picDimensions = await getImageDimensionsByUrl(getDownloadUrl);
    const uploadPicToDB = await firebase.db
      .collection('pictures')
      .doc(uid)
      .collection('pictures')
      .doc(randomHash)
      .set({
        caption: filename,
        src: getDownloadUrl,
        thumbnail: getDownloadUrl,
        thumbnailWidth: picDimensions.width,
        thumbnailHeight: picDimensions.height,
        storageRef: { uid, randomHash },
      });
    dispatch(notifications.pictures.one.success(file.name));
    return uploadPicToDB;
  } catch (e) {
    dispatch(notifications.pictures.one.failed(file.name));
    return Promise.reject(new Error('Failed while uploading'));
  }
};
export const fetchAllPictures = () => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    dispatch(actions.ui.changeLoaderStatus(true));
    try {
      const res = [];
      const pictures = await firebase.db
        .collection('pictures')
        .doc(auth.user.uid)
        .collection('pictures')
        .get();
      if (pictures.length === 0) return;
      pictures.forEach(doc => {
        res.push(doc.data());
      });

      dispatch(actions.pictures.setPictures(res));
      dispatch(notifications.pictures.fetch.success());
    } catch (e) {
      dispatch(notifications.pictures.fetch.failed());
    } finally {
      dispatch(actions.ui.changeLoaderStatus(false));
    }
  };
};

export const upload = () => {
  return async (dispatch, getState) => {
    const { auth, pictures } = getState();
    dispatch(actions.ui.changeLoaderStatus(true));
    return Promise.all(
      pictures.files.map(async file => {
        await putStorageOne(dispatch, file, auth.user.uid, file.name);
      }),
    )
      .then(() => {
        dispatch(fetchAllPictures());
        dispatch(notifications.pictures.all.success());
      })
      .catch(() => {
        dispatch(notifications.pictures.all.failed());
      })
      .finally(() => {
        dispatch(actions.ui.changeLoaderStatus(false));
        dispatch(actions.pictures.resetFiles());
      });
  };
};

export const setFiles = pictures => dispatch =>
  dispatch(actions.pictures.setFiles(pictures));

export const removePicture = removeIndex => {
  return async (dispatch, getState) => {
    const { auth, pictures } = getState();
    const picture = pictures.pictures[removeIndex];
    dispatch(actions.ui.changeLoaderStatus(true));
    try {
      // deleting from db
      await firebase.db
        .collection('pictures')
        .doc(auth.user.uid)
        .collection('pictures')
        .doc(picture.storageRef.randomHash)
        .delete();
      // deleting from storage
      await firebase.storage
        .ref(`${auth.user.uid}/${picture.storageRef.randomHash}`)
        .delete();

      dispatch(notifications.pictures.deleting.success(picture.caption));
      dispatch(
        actions.pictures.setPictures(
          pictures.pictures.filter((val, index) => index !== removeIndex),
        ),
      );
    } catch (e) {
      dispatch(notifications.pictures.deleting.failed(picture.caption));
    } finally {
      dispatch(actions.ui.changeLoaderStatus(false));
    }
  };
};
