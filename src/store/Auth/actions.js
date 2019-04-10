import * as actionTypes from './actionTypes';

export const authorize = user => ({
  type: actionTypes.AUTHORIZE,
  payload: { user },
});

export const signout = () => ({
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
