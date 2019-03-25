import { Switch, Route } from 'react-router';
import React, { Component } from 'react';
import { ReactReduxContext } from 'react-redux';
import * as ROUTES from './routes';

import { HomeContainer } from './containers';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      // <Switch>
      <ReactReduxContext.Consumer>
        {({ store }) => {
          console.log(store);
          // do something useful with the store, like passing it to a child

          // component where it can be used in lifecycle methods
        }}
      </ReactReduxContext.Consumer>
      //   <Route exact path={ROUTES.HOME} component={HomeContainer} />
      // </Switch>
    );
  }
}

export default App;
