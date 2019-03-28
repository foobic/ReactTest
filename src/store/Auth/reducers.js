import { AUTHORIZE_ACTION } from './actionTypes';

const initialState = {
  uid: '',
  accessToken: '123',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZE_ACTION:
      return { uid: action.payload.uid };
    default:
      return state;
  }
};
