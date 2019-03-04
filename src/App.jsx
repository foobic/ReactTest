import React from 'react';
import { Switch, Route } from 'react-router';
import * as ROUTES from './routes';

import { HomeContainer } from './containers';

const App = () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={HomeContainer} />
  </Switch>
);

export default App;
