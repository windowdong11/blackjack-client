import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import NavigationBar from './components/NavigationBar';
import links from './Links';
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
  width: 100%;
  height: 100%;
`


function App() {
  return (
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
          <Route exact path={links.payment}>
            Pay
            </Route>
          <Route>
            Nomatch
            </Route>
        </Switch>
      </BrowserRouter>
    </ContentWrapper>
  );
}

export default App;
