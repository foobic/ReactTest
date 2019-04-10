import { Switch, Route, withRouter } from 'react-router';
import React, { Component } from 'react';
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
import actionCreators from './store/actionCreators';

class App extends Component {
  componentWillMount() {
    const { store } = this.props;
    const { auth } = store.getState();
    if (!auth.user) store.dispatch(actionCreators.auth.loadFromLS());
  }

  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => {
          const { store } = this.props;
          const { auth } = store.getState();
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
  }
}

export default withRouter(App);
