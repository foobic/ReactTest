import { Switch, Route } from 'react-router';
import React, { Component } from 'react';
import * as ROUTES from './routes';
import { PrivateRoute } from './helpers'
import { SignupContainer, SigninContainer, HomeContainer, UploadContainer } from './containers';


class App extends Component {
  render() {
    return (
       <Switch>
        <PrivateRoute exact path={ROUTES.HOME} component={HomeContainer}></PrivateRoute>
        <PrivateRoute exact path={ROUTES.UPLOAD} component={UploadContainer}></PrivateRoute>
        <Route exact path={ROUTES.SIGN_IN} component={SigninContainer}></Route>
        <Route exact path={ROUTES.SIGN_UP} component={SignupContainer}></Route>
      </Switch>
    );
  }
}

export default App;
