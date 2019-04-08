import {
  AUTHORIZE_ACTION,
  UPDATE_EMAIL,
  UPDATE_PASS,
  UPDATE_PASS_REPEAT,
  CHANGE_DIALOG_STATE,
} from './actionTypes';

import { changeLoaderStatus, enqueueSnackbar } from '../UI/actions';
import * as ROUTES from '../../routes';
import history from '../../history';

export const authorize = user => ({
  type: AUTHORIZE_ACTION,
  payload: { user },
});

export const updateEmail = email => ({
  type: UPDATE_EMAIL,
  payload: { email },
});

export const updatePass = pass => ({
  type: UPDATE_PASS,
  payload: { pass },
});

export const updatePassRepeat = passRepeat => ({
  type: UPDATE_PASS_REPEAT,
  payload: { passRepeat },
});

export const changeDialogState = emailDialogIsOpen => ({
  type: CHANGE_DIALOG_STATE,
  payload: { emailDialogIsOpen },
});

export const signupWithEmail = firebase => {
  return (dispatch, getState) => {
    dispatch(changeLoaderStatus(true));
    const { auth } = getState();
    return firebase
      .createUserWithEmailAndPassword(auth.email, auth.pass)
      .then(authedUser => {
        dispatch(
          enqueueSnackbar({
            message: 'You are successfully registered. Sign in now, please.',
            options: { variant: 'success', autoHideDuration: 2000 },
          }),
        );
      })
      .then(() => history.push(ROUTES.ACCOUNT))
      .catch(e => {
        dispatch(
          enqueueSnackbar({
            message: `Error while signup with email: ${e.message}`,
            options: { variant: 'error', autoHideDuration: 2000 },
          }),
        );
      })
      .finally(() => {
        dispatch(changeLoaderStatus(false));
      });
  };
};

export const signinWithEmail = firebase => {
  return (dispatch, getState) => {
    const { auth } = getState();
    dispatch(changeLoaderStatus(true));
    return firebase
      .signInWithEmailAndPassword(auth.email, auth.pass)
      .then(authedUser => {
        console.log(authedUser);
        dispatch(authorize(authedUser.user));
        dispatch(changeDialogState(false));
        dispatch(
          enqueueSnackbar({
            message: `You are successfully authorized. `,
            options: { variant: 'success', autoHideDuration: 2000 },
          }),
        );
      })
      .then(() => history.push(ROUTES.ACCOUNT))
      .catch(e => {
        dispatch(
          enqueueSnackbar({
            message: `Error while authorization with email: ${e.message}`,
            options: { variant: 'error', autoHideDuration: 2000 },
          }),
        );
      })
      .finally(() => {
        dispatch(changeLoaderStatus(false));
      });
  };
};

export const signinWithGoogle = firebase => {
  return dispatch =>
    firebase
      .doSignInWithGoogle()
      .then(authedUser => {
        dispatch(authorize(authedUser.user));
      })
      .then(() => history.push(ROUTES.ACCOUNT))
      .catch(error => {
        this.setState({ error });
      });
};
