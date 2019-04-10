import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  notifications: [],
  isQuitDialogOpen: false,
  emailDialogIsOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOADER_STATUS:
      return { ...state, isLoading: action.payload.isLoading };
    case actionTypes.CHANGE_QUIT_DIALOG_STATUS:
      return { ...state, isQuitDialogOpen: action.payload.isQuitDialogOpen };
    case actionTypes.CHANGE_DIALOG_STATE:
      return { ...state, emailDialogIsOpen: action.payload.emailDialogIsOpen };
    case actionTypes.ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.notification,
          },
        ],
      };

    case actionTypes.REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.key !== action.key,
        ),
      };
    default:
      return state;
  }
};
