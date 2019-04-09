import * as actionTypes from './actionTypes';

import {
  changeLoaderStatus,
  changeQuitDialogStatus,
  enqueueSnackbar,
} from '../UI/actions';
import * as ROUTES from '../../routes';
import history from '../../history';
import { firebase } from '../../firebase';

export const authorizeAction = user => ({
  type: actionTypes.AUTHORIZE,
  payload: { user },
});

export const signoutAction = () => ({
  type: actionTypes.SIGNOUT,
  payload: null,
});

export const updateEmail = email => ({
  type: actionTypes.UPDATE_EMAIL,
  payload: { email },
});

export const updatePass = pass => ({
  type: actionTypes.UPDATE_PASS,
  payload: { pass },
});

export const updatePassRepeat = passRepeat => ({
  type: actionTypes.UPDATE_PASS_REPEAT,
  payload: { passRepeat },
});

export const changeDialogState = emailDialogIsOpen => ({
  type: actionTypes.CHANGE_DIALOG_STATE,
  payload: { emailDialogIsOpen },
});

export const signupWithEmail = () => {
  return async (dispatch, getState) => {
    const { email, pass, passRepeat } = getState().auth;

    if (pass !== passRepeat) {
      dispatch(
        enqueueSnackbar({
          message: `Passwords should be equal`,
          options: { variant: 'error', autoHideDuration: 2000 },
        }),
      );
      return;
    }

    dispatch(changeLoaderStatus(true));
    try {
      await firebase.createUserWithEmailAndPassword(email, pass);
      dispatch(
        enqueueSnackbar({
          message: 'You are successfully registered. Sign in now, please.',
          options: { variant: 'success', autoHideDuration: 2000 },
        }),
      );
      history.push(ROUTES.ACCOUNT);
    } catch (e) {
      dispatch(
        enqueueSnackbar({
          message: `Error while signup with email: ${e.message}`,
          options: { variant: 'error', autoHideDuration: 2000 },
        }),
      );
    } finally {
      dispatch(changeLoaderStatus(false));
    }
  };
};

const setObjToLS = (key, obj) => localStorage.setItem(key, JSON.stringify(obj));
const getObjFromLS = key => JSON.parse(localStorage.getItem(key));

export const signinWithEmail = () => {
  return async (dispatch, getState) => {
    const { email, pass } = getState().auth;
    dispatch(changeLoaderStatus(true));

    try {
      const { user } = await firebase.signInWithEmailAndPassword(email, pass);
      setObjToLS('user', user);
      dispatch(authorizeAction(user));
      dispatch(changeDialogState(false));
      dispatch(
        enqueueSnackbar({
          message: `You are successfully authorized. `,
          options: { variant: 'success', autoHideDuration: 2000 },
        }),
      );
      history.push(ROUTES.ACCOUNT);
    } catch (e) {
      dispatch(
        enqueueSnackbar({
          message: `Error while authorization with email: ${e.message}`,
          options: { variant: 'error', autoHideDuration: 2000 },
        }),
      );
    } finally {
      dispatch(changeLoaderStatus(false));
    }
  };
};

export const signinWithGoogle = () => {
  return async dispatch => {
    try {
      const { user } = await firebase.doSignInWithGoogle();
      setObjToLS('user', user);
      dispatch(authorizeAction(user));
      history.push(ROUTES.ACCOUNT);
    } catch (e) {
      dispatch(
        enqueueSnackbar({
          message: `Error while authorization with google: ${e.message}`,
          options: { variant: 'error', autoHideDuration: 2000 },
        }),
      );
    }
  };
};

export const signout = () => {
  return dispatch => {
    localStorage.removeItem('user');
    dispatch(signoutAction());
    dispatch(
      enqueueSnackbar({
        message: `You are successfully logged out`,
        options: { variant: 'success', autoHideDuration: 2000 },
      }),
    );
    dispatch(changeQuitDialogStatus(false));
  };
};

export const loadFromLS = () => {
  return dispatch => {
    const user = getObjFromLS('user');
    if (!user) return;
    history.push(ROUTES.ACCOUNT);
    dispatch(authorizeAction(user));
    dispatch(
      enqueueSnackbar({
        message: `You are successfully authorized using data from local storage`,
        options: { variant: 'success', autoHideDuration: 2000 },
      }),
    );
  };
};
