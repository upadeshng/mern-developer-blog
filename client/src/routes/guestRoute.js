import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const GuestRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return localStorage.getItem('token') ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};
