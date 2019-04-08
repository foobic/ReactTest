import {
  AUTHORIZE_ACTION,
  UPDATE_EMAIL,
  UPDATE_PASS,
  UPDATE_PASS_REPEAT,
  CHANGE_DIALOG_STATE,
} from './actionTypes';

const initialState = {
  user: { uid: 'z7MQaaC82fd7ZLR4LymGWa97Svo1' },
  email: 'foobic@gmail.com',
  pass: '123456',
  passRepeat: '123456',
  emailDialogIsOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZE_ACTION:
      return { ...state, user: { ...action.payload.user } };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload.email };
    case UPDATE_PASS:
      return { ...state, pass: action.payload.pass };
    case UPDATE_PASS_REPEAT:
      return { ...state, passRepeat: action.payload.passRepeat };
    case CHANGE_DIALOG_STATE:
      return { ...state, emailDialogIsOpen: action.payload.emailDialogIsOpen };
    default:
      return state;
  }
};
