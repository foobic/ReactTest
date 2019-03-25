import { TEST_ACTION } from './actionTypes';

const initialState = {
  test: '123',
  accessToken: '123',
};

export default function test(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return { test: action.payload.test };
    default:
      return state;
  }
}
