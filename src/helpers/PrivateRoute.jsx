import { Route, Redirect } from 'react-router';
import React from 'react';

export default ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signup', state: { from: props.location } }}
          />
        )
      }
    />
  );
};
