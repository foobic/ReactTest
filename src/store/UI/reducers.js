import {
  ENQUEUE_SNACKBAR,
  REMOVE_SNACKBAR,
  CHANGE_LOADER_STATUS,
  CHANGE_QUIT_DIALOG_STATUS,
} from './actionTypes';

const initialState = {
  isLoading: false,
  notifications: [],
  isQuitDialogOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOADER_STATUS:
      return { ...state, isLoading: action.payload.isLoading };
    case CHANGE_QUIT_DIALOG_STATUS:
      return { ...state, isQuitDialogOpen: action.payload.isQuitDialogOpen };
    case ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.notification,
          },
        ],
      };

    case REMOVE_SNACKBAR:
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
