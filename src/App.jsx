import { Switch, Route, withRouter } from 'react-router';
import React from 'react';
import * as ROUTES from './routes';
import { PrivateRoute } from './helpers';
import {
  SignupContainer,
  SigninContainer,
  HomeContainer,
  UploadContainer,
} from './containers';
import { FirebaseContext } from './firebase';

const App = props => {
  return (
    <FirebaseContext.Consumer>
      {firebase => {
        const { auth } = props.store.getState();
        return (
          <Switch>
            <PrivateRoute
              exact
              path={ROUTES.HOME}
              authed={!!auth.uid}
              component={() => <HomeContainer firebase={firebase} />}
            />
            <PrivateRoute
              exact
              path={ROUTES.UPLOAD}
              authed={!!auth.uid}
              component={() => <UploadContainer firebase={firebase} />}
            />
            <Route
              exact
              path={ROUTES.SIGN_IN}
              component={() => <SigninContainer firebase={firebase} />}
            />
            <Route
              exact
              path={ROUTES.SIGN_UP}
              component={() => <SignupContainer firebase={firebase} />}
            />
          </Switch>
        );
      }}
    </FirebaseContext.Consumer>
  );
};

export default withRouter(App);
