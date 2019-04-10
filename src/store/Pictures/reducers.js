import * as actionTypes from './actionTypes';

const initialState = {
  files: [],
  pictures: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FILES:
      return { ...state, files: [...action.payload.files] };
    case actionTypes.RESET_FILES:
      return { ...state, files: action.payload.files };
    case actionTypes.SET_PICTURES:
      return { ...state, pictures: [...action.payload.pictures] };
    case actionTypes.RESET_PICTURES:
      return { ...state, pictures: action.payload.pictures };
    default:
      return state;
  }
};
