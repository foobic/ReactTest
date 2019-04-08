import {
  CHANGE_LOADER_STATUS,
  ENQUEUE_SNACKBAR,
  REMOVE_SNACKBAR,
  CHANGE_QUIT_DIALOG_STATUS,
} from './actionTypes';

// TODO: Sign out functionality
export const changeLoaderStatus = isLoading => ({
  type: CHANGE_LOADER_STATUS,
  payload: { isLoading },
});

export const changeQuitDialogStatus = isQuitDialogOpen => ({
  type: CHANGE_QUIT_DIALOG_STATUS,
  payload: { isQuitDialogOpen },
});

export const enqueueSnackbar = notification => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    key: new Date().getTime() + Math.random(),
    ...notification,
  },
});

export const removeSnackbar = key => ({
  type: REMOVE_SNACKBAR,
  key,
});
