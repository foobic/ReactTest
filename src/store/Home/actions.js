import { TEST_ACTION } from './actionTypes';

export const getTest = test => ({
  type: TEST_ACTION,
  payload: { test },
});
