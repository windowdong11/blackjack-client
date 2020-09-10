import React from 'react';

import NavigationBar from './components/NavigationBar'
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <Router>
          <NavigationBar/>
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route exact path="/login">
              Login
            </Route>
            <Route exact path="/logout">
              Logout
            </Route>
            <Route exact path="/payment">
              Pay
            </Route>
            <Route>
              Nomatch
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
