import {
  SET_FILES,
  RESET_FILES,
  SET_PICTURES,
  RESET_PICTURES,
} from './actionTypes';

const initialState = {
  files: [],
  pictures: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILES:
      return { ...state, files: [...action.payload.files] };
    case RESET_FILES:
      return { ...state, files: action.payload.files };
    case SET_PICTURES:
      return { ...state, pictures: [...action.payload.pictures] };
    case RESET_PICTURES:
      return { ...state, pictures: action.payload.pictures };
    default:
      return state;
  }
};
