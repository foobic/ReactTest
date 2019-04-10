import { push } from 'connected-react-router';
import * as ROUTES from './routes';

export default {
  redirectToHome: () => push(ROUTES.HOME),
  redirectToSignup: () => push(ROUTES.SIGN_UP),
  redirectToAccount: () => push(ROUTES.ACCOUNT),
  redirectToUpload: () => push(ROUTES.UPLOAD),
};
