import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/chat/Chat'
import client from './gql/Client';
import { ApolloProvider } from '@apollo/client';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ProvideAuth, useAuth } from './pages/auth/Auth';
import PrivateRoute from './router/PrivateRoute';
import NonePrivateRoute from './router/NonePrivateRoute'
import PrivateLink from './link/PrivateLink';
import NonePrivateLink from './link/NonePrivateLink';
import LogoutButton from './components/LogoutButton';
import styled from 'styled-components'

import playingCats_1920 from './images/playingcats_1920.png'
import playingDesk_1920 from './images/playingdesk_1920.jpg'
import cards_svg from './images/cards.svg'
import FitImg from './components/FitImg';


// ------------------------ Navigation Bar ---------------------------

const NavBar = styled.div`
  /* background-color: rgba(136, 114, 243, 1); */
  height: 3em;
  min-width : fit-content;

  padding: 0.5em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  position: fixed;
  left: 0;
  top: 0;
  width: calc(100% - 1em);
  outline: solid black 2px;

  background-color: white;
`

const NavLogo = styled(Link)`
  height: inherit;
`

const NavMenu = styled.ul`
  a {
    :visited{
      color: inherit;
    }
    
  }
  li{
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 12px;
    padding-right: 12px;
    :hover{
      color: white;
      background-color: black;
    }
  }
  list-style: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 33%;

  font-size: 1.2em;
`

const NavAuth = styled.div`
display: flex;
flex-direction: column;
`
// ------------------------ Body ---------------------------
const BodyWrapper = styled.div`
  /* background-color: rgba(158, 159, 214, 1); */
  padding: 0;
  padding-top: 1em;
  margin-top: 4em;

  min-height: calc(100vh - 9em);/* 100% - 헤더 높이 - 푸터 높이 */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`



const ContentWrapper = styled.div`
  display: flex;

  flex-direction: column;
  
  align-items: center;

  width: 100%;
`

// -------------------- Footer -------------------

const FootWrapper = styled.footer`
  /* position: fixed;
  left: 0;
  bottom: 0; */
  height: 3em;
  width: calc(100% - 1em); /* 100% - padding(left + right) */

  padding: 0.5em;

  background-color: #282c34;

  color: #ffffff80;
`

function App() {
  return (
    <ApolloProvider client={client}>
      <ProvideAuth>
        <BrowserRouter>

          <NavBar>
            <NavLogo to='/'>
              <FitImg src={cards_svg}></FitImg>
            </NavLogo>
            <NavMenu>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/chat'>Chat</Link></li>
              <li><Link to='/howto'>HowTo</Link></li>
            </NavMenu>
            <NavAuth>
              <NonePrivateLink to='/login'>Login</NonePrivateLink>
              <NonePrivateLink to='/register'>Register</NonePrivateLink>
              <LogoutButton>Logout</LogoutButton>
            </NavAuth>
          </NavBar>

          <BodyWrapper>
            <ContentWrapper>
              <Route exact path='/'><Home></Home></Route>
              <PrivateRoute path='/chat'><Chat /></PrivateRoute>
              <NonePrivateRoute path='/login'><Login></Login></NonePrivateRoute>
              <NonePrivateRoute path='/register'><Register></Register></NonePrivateRoute>
            </ContentWrapper>
          </BodyWrapper>

          <FootWrapper>
            BlackJack App - SungWon, DongGyu
          </FootWrapper>
        </BrowserRouter>
      </ProvideAuth>
    </ApolloProvider>
  );
}

export default App;
