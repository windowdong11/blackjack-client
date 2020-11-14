import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../pages/auth/Auth';

export default function PrivateRoute({ children, ...rest }) {
  const auth = useAuth()

  return (
    <Route
      {...rest}
      render={() =>{
        if (auth.user){
          return children
        }
        alert('먼저 로그인이 필요한 기능입니다.')
        return <Redirect to='/login'/>
      }
      }
    />
  );
}