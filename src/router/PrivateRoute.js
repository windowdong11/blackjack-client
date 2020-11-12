import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../pages/auth/Auth';

export default function PrivateRoute({ children, ...rest }) {
  const auth = useAuth()

  return (
    <Route
      {...rest}
      render={() =>
        auth.user
          ? children
          : <Redirect to='/login' />
      }
    />
  );
}