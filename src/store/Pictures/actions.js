import { SET_PICTURES, RESET_PICTURES } from './actionTypes';
import { changeLoaderStatus, enqueueSnackbar } from '../UI/actions';

export const setPictures = pictures => ({
  type: SET_PICTURES,
  payload: { pictures },
});

export const resetPictures = () => ({
  type: RESET_PICTURES,
  payload: { pictures: [] },
});

function putStorageItem(firebase, dispatch, item, path) {
  return firebase.storage
    .ref(`${path}`)
    .put(item)
    .then(snapshot => {
      dispatch(
        enqueueSnackbar({
          message: `${item.name} successfully uploaded.`,
          options: { variant: 'success', autoHideDuration: 1000 },
        }),
      );
    })
    .catch(error => {
      dispatch(
        enqueueSnackbar({
          message: `${item.name} uploading failed.`,
          options: { variant: 'error', autoHideDuration: 1000 },
        }),
      );
    });
}

export const upload = firebase => {
  return (dispatch, getState) => {
    dispatch(changeLoaderStatus(true));
    const { auth, pictures } = getState();
    return Promise.all(
      pictures.pictures.map(item =>
        putStorageItem(
          firebase,
          dispatch,
          item,
          `${auth.user.uid}/${item.name}`,
        ),
      ),
    )
      .then(url => {
        dispatch(
          enqueueSnackbar({
            message: `All images successfully uploaded.`,
            options: { variant: 'success', autoHideDuration: 2000 },
          }),
        );
      })
      .catch(error => {
        dispatch(
          enqueueSnackbar({
            message: `Some images failed during uploading.`,
            options: { variant: 'error', autoHideDuration: 2000 },
          }),
        );
      })
      .finally(() => {
        dispatch(changeLoaderStatus(false));
        dispatch(resetPictures());
      });
  };
};
