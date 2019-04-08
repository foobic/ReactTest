import { SET_PICTURES, RESET_PICTURES } from './actionTypes';

const initialState = {
  pictures: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PICTURES:
      return { pictures: [...action.payload.pictures] };
    case RESET_PICTURES:
      return { pictures: action.payload.pictures };
    default:
      return state;
  }
};
