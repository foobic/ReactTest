import { Switch, Route, withRouter } from 'react-router';
import React from 'react';
import * as ROUTES from './routes';
import { PrivateRoute } from './helpers';
import {
  SignupContainer,
  AccountContainer,
  HomeContainer,
  UploadContainer,
} from './containers';
import { PageNotFound } from './components';
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
              authed={!!auth.user}
              component={() => <HomeContainer firebase={firebase} />}
            />
            <PrivateRoute
              exact
              path={ROUTES.UPLOAD}
              authed={!!auth.user}
              component={() => <UploadContainer firebase={firebase} />}
            />
            <Route
              exact
              path={ROUTES.ACCOUNT}
              component={() => <AccountContainer firebase={firebase} />}
            />
            <Route
              exact
              path={ROUTES.SIGN_UP}
              component={() => <SignupContainer firebase={firebase} />}
            />
            <Route component={() => <PageNotFound />} />
          </Switch>
        );
      }}
    </FirebaseContext.Consumer>
  );
};

export default withRouter(App);
