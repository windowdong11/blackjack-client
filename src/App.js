import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import client from './gql/Client';
import { ApolloProvider } from '@apollo/client';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/chat'>Chat</Link>
        <br />
        <Link to='/login'>Login</Link>
        <br />
        <Link to='/register'>Register</Link>
        <br />

        <Route exact path='/' component={Home}></Route>
        <Route path='/chat' component={Chat}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
