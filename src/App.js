import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import NavigationBar from './components/NavigationBar';
import { client } from './httprequests';
import links from './Links';
import Logout from './pages/Auth/Logout';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';


const GlobalStyle = createGlobalStyle`
  html, body, body>div#root{
    width: 100%;
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`
const ContentWrapper = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 100%;
`


function App() {
  return (
    <ApolloProvider client={client}>
      <ContentWrapper>
        <GlobalStyle />
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route exact path={links.signin}>
              <SignIn />
            </Route>
            <Route exact path={links.signup}>
              <SignUp />
            </Route>
            <Route exact path={links.logout}>
              <Logout />
            </Route>
            <Route exact path={links.payment}>
              Pay
            </Route>
            <Route>
              Nomatch
            </Route>
          </Switch>
        </BrowserRouter>
      </ContentWrapper>
    </ApolloProvider>
  );
}

export default App;
