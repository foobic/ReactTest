import actions from './actions';

const createSnackbar = (message, variant, autoHideDuration = 3000) => {
  return actions.ui.enqueueSnackbar({
    message,
    options: { variant, autoHideDuration },
  });
};

export default {
  auth: {
    passwordsNotEqual: () =>
      createSnackbar(`Passwords should be equal.`, 'error'),
    signup: {
      success: () =>
        createSnackbar(
          `You are successfully registered. Sign in now, please.`,
          'success',
        ),
      failed: e =>
        createSnackbar(`Error while signup with email: ${e.message}`, 'error'),
    },
    signinEmail: {
      success: () =>
        createSnackbar(
          `You are successfully authorized using email. `,
          'success',
        ),
      failed: e =>
        createSnackbar(
          `Error while authorization with email: ${e.message}`,
          'error',
        ),
    },
    signinGoogle: {
      success: () =>
        createSnackbar(
          `You are successfully authorized using google. `,
          'success',
        ),
      failed: e =>
        createSnackbar(
          `Error while authorization with google: ${e.message}`,
          'error',
        ),
    },
    signout: () => createSnackbar('You are successfully logged out', 'success'),
    loadFromLS: () =>
      createSnackbar(
        'You are successfully authorized using data from local storage',
        'success',
      ),
  },
  pictures: {
    one: {
      success: name =>
        createSnackbar(`${name} successfully uploaded.`, 'success'),
      failed: name => createSnackbar(`${name} uploading failed.`, 'error'),
    },
    all: {
      success: () =>
        createSnackbar(`All images successfully uploaded`, 'success'),
      failed: () =>
        createSnackbar(`Some images failed during uploading.`, 'error'),
    },
    fetch: {
      success: () =>
        createSnackbar(
          `All images were successfully fetched from firebase`,
          'success',
        ),
      failed: () =>
        createSnackbar(
          `Failed while fetching from firebase happened.`,
          'error',
        ),
    },
    deleting: {
      success: name =>
        createSnackbar(`Image ${name} successfully deleted.`, 'success'),
      failed: name => createSnackbar(`Failed during deleting ${name}`, 'error'),
    },
  },
};
