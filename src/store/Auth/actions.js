import { AUTHORIZE_ACTION } from './actionTypes';

export const authorize = uid => ({
  type: AUTHORIZE_ACTION,
  payload: { uid },
});
