import * as actionTypes from './actionTypes';

export const changeLoaderStatus = isLoading => ({
  type: actionTypes.CHANGE_LOADER_STATUS,
  payload: { isLoading },
});

export const changeQuitDialogStatus = isQuitDialogOpen => ({
  type: actionTypes.CHANGE_QUIT_DIALOG_STATUS,
  payload: { isQuitDialogOpen },
});

export const enqueueSnackbar = notification => ({
  type: actionTypes.ENQUEUE_SNACKBAR,
  notification: {
    key: new Date().getTime() + Math.random(),
    ...notification,
  },
});

export const removeSnackbar = key => ({
  type: actionTypes.REMOVE_SNACKBAR,
  key,
});

export const changeDialogState = emailDialogIsOpen => ({
  type: actionTypes.CHANGE_DIALOG_STATE,
  payload: { emailDialogIsOpen },
});
