import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/chat/Chat'
import client from './gql/Client';
import { ApolloProvider } from '@apollo/client';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ProvideAuth } from './pages/auth/Auth';
import PrivateRoute from './router/PrivateRoute';
import NonePrivateRoute from './router/NonePrivateRoute'
import PrivateLink from './link/PrivateLink';
import NonePrivateLink from './link/NonePrivateLink';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <ApolloProvider client={client}>
      <ProvideAuth>
        <BrowserRouter>
          <Link to='/'>Home</Link>
          <PrivateLink to='/chat'>Chat</PrivateLink>
          <NonePrivateLink to='/login'>Login</NonePrivateLink>
          <NonePrivateLink to='/register'>Register</NonePrivateLink>
          <LogoutButton>Logout</LogoutButton>

          <Route exact path='/'><Home></Home></Route>
          <PrivateRoute path='/chat'><Chat/></PrivateRoute>
          <NonePrivateRoute path='/login'><Login></Login></NonePrivateRoute>
          <NonePrivateRoute path='/register'><Register></Register></NonePrivateRoute>
        </BrowserRouter>
      </ProvideAuth>
    </ApolloProvider>
  );
}

export default App;
