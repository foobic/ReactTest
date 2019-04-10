import history from './history';
import * as ROUTES from './routes';

export default {
  redirect: {
    home: () => history.push(ROUTES.HOME),
    signup: () => history.push(ROUTES.SIGN_UP),
    account: () => history.push(ROUTES.ACCOUNT),
    upload: () => history.push(ROUTES.UPLOAD),
  },
};
