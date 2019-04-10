import * as actionTypes from './actionTypes';

export const setFiles = files => ({
  type: actionTypes.SET_FILES,
  payload: { files },
});

export const resetFiles = () => ({
  type: actionTypes.RESET_FILES,
  payload: { files: [] },
});

export const setPictures = pictures => ({
  type: actionTypes.SET_PICTURES,
  payload: { pictures },
});

export const resetPictures = () => ({
  type: actionTypes.RESET_PICTURES,
  payload: { pictures: [] },
});
