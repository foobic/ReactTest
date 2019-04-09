import { sha256 } from 'js-sha256';
import {
  SET_FILES,
  RESET_FILES,
  SET_PICTURES,
  RESET_PICTURES,
} from './actionTypes';
import { changeLoaderStatus, enqueueSnackbar } from '../UI/actions';
import { getImageDimensionsByUrl } from '../../helpers';
import { firebase } from '../../firebase';

export const setFiles = files => ({
  type: SET_FILES,
  payload: { files },
});

export const resetFiles = () => ({
  type: RESET_FILES,
  payload: { files: [] },
});

export const setPictures = pictures => ({
  type: SET_PICTURES,
  payload: { pictures },
});

export const resetPictures = () => ({
  type: RESET_PICTURES,
  payload: { pictures: [] },
});

const notifications = {
  one: {
    success: name =>
      enqueueSnackbar({
        message: `${name} successfully uploaded.`,
        options: { variant: 'success', autoHideDuration: 1000 },
      }),
    failed: name =>
      enqueueSnackbar({
        message: `${name} uploading failed.`,
        options: { variant: 'error', autoHideDuration: 1000 },
      }),
  },
  all: {
    success: () =>
      enqueueSnackbar({
        message: `All images successfully uploaded`,
        options: { variant: 'success', autoHideDuration: 1000 },
      }),
    failed: () =>
      enqueueSnackbar({
        message: `Some images failed during uploading.`,
        options: { variant: 'error', autoHideDuration: 1000 },
      }),
  },
  fetch: {
    success: () =>
      enqueueSnackbar({
        message: `All images were successfully fetched from firebase`,
        options: { variant: 'success', autoHideDuration: 1000 },
      }),
    failed: () =>
      enqueueSnackbar({
        message: `Failed while fetching from firebase happened.`,
        options: { variant: 'error', autoHideDuration: 1000 },
      }),
  },
};

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
    dispatch(notifications.one.success(file.name));
    return uploadPicToDB;
  } catch (e) {
    dispatch(notifications.one.failed(file.name));
    return Promise.reject(new Error('Failed while uploading'));
  }
};

const putStorageAll = (dispatch, getState) => {
  const { auth, pictures } = getState();
  return Promise.all(
    pictures.files.map(async file => {
      await putStorageOne(dispatch, file, auth.user.uid, file.name);
    }),
  );
};

export const upload = () => {
  return async (dispatch, getState) => {
    dispatch(changeLoaderStatus(true));
    return putStorageAll(dispatch, getState)
      .then(url => {
        dispatch(notifications.all.success());
      })
      .catch(error => {
        dispatch(notifications.all.failed());
      })
      .finally(() => {
        dispatch(changeLoaderStatus(false));
        dispatch(resetFiles());
      });
  };
};

export const fetchAllPictures = () => {
  // console.log()
  return async (dispatch, getState) => {
    const { auth } = getState();
    await firebase.db
      .collection('pictures')
      .doc(auth.user.uid)
      .collection('pictures')
      .get()
      .then(function(querySnapshot) {
        const res = [];
        querySnapshot.forEach(function(doc) {
          res.push(doc.data());
        });
        dispatch(setPictures(res));
        if (res.length > 0) dispatch(notifications.fetch.success());
      })
      .catch(() => dispatch(notifications.fetch.failed()));
  };
};
