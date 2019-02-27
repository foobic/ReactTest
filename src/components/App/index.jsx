import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from '../Home/index';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Route path={ROUTES.HOME} component={HomePage} />
    </div>
  </Router>
);

export default App;

