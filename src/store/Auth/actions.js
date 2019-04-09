import {
  AUTHORIZE,
  UPDATE_EMAIL,
  UPDATE_PASS,
  UPDATE_PASS_REPEAT,
  CHANGE_DIALOG_STATE,
  SIGNOUT,
} from './actionTypes';

import {
  changeLoaderStatus,
  changeQuitDialogStatus,
  enqueueSnackbar,
} from '../UI/actions';
import * as ROUTES from '../../routes';
import history from '../../history';
import { firebase } from '../../firebase';

export const authorizeAction = user => ({
  type: AUTHORIZE,
  payload: { user },
});

export const signoutAction = () => ({
  type: SIGNOUT,
  payload: null,
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

export const signupWithEmail = () => {
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

const setObjToLS = (key, obj) => localStorage.setItem(key, JSON.stringify(obj));
const getObjFromLS = key => JSON.parse(localStorage.getItem(key));

export const signinWithEmail = () => {
  return (dispatch, getState) => {
    const { auth } = getState();
    dispatch(changeLoaderStatus(true));
    return firebase
      .signInWithEmailAndPassword(auth.email, auth.pass)
      .then(authedUser => {
        setObjToLS('user', authedUser.user);
        dispatch(authorizeAction(authedUser.user));
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

export const signinWithGoogle = () => {
  return dispatch =>
    firebase
      .doSignInWithGoogle()
      .then(authedUser => {
        setObjToLS('user', authedUser.user);
        dispatch(authorizeAction(authedUser.user));
      })
      .then(() => history.push(ROUTES.ACCOUNT))
      .catch(error => {
        this.setState({ error });
      });
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
