import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../pages/auth/Auth';

export default function NonePrivateRoute({ children, ...rest }) {
    const auth = useAuth()

    return (
        <Route
            {...rest}
            render={() =>
                auth.user
                    ? <Redirect to='/' />
                    : children
            }
        />
    );
}