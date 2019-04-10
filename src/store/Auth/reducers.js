import * as actionTypes from './actionTypes';

const initialState = {
  user: null,
  email: '',
  pass: '',
  passRepeat: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHORIZE:
      return { ...state, user: { ...action.payload.user } };
    case actionTypes.SIGNOUT:
      return { ...state, user: action.payload };
    case actionTypes.UPDATE_EMAIL:
      return { ...state, email: action.payload.email };
    case actionTypes.UPDATE_PASS:
      return { ...state, pass: action.payload.pass };
    case actionTypes.UPDATE_PASS_REPEAT:
      return { ...state, passRepeat: action.payload.passRepeat };
    default:
      return state;
  }
};
