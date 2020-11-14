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
import cards_1280 from './images/cards_1280.png'
import cards_svg from './images/cards.svg'

const NavBar = styled.div`
  /* background-color: rgba(136, 114, 243, 1); */
  height: 3em;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width : fit-content;
`

const NavLogo = styled.div`
  height: inherit;
`

const NavMenu = styled.ul`
  a {
    :visited{
      color: inherit;
    }
    
  }
  li{
    :hover{
      color: white;
      background-color: black;
      padding-top: 1em;
      padding-bottom: 1em;
      padding-left: 12px;
      padding-right: 12px;
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

const BodyWrapper = styled.div`
  /* background-color: rgba(158, 159, 214, 1); */
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  outline: solid black 2px;
`
const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: solid yellow 2px;
`

const FitImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`

function CustomNav(props){
  const auth = useAuth()

}

function App() {
  return (
    <ApolloProvider client={client}>
      <ProvideAuth>
        <BrowserRouter>
        <NavBar>
          <NavLogo>
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
            <FitImg src={cards_1280}></FitImg>
            <Route exact path='/'><Home></Home></Route>
            <PrivateRoute path='/chat'><Chat/></PrivateRoute>
            <NonePrivateRoute path='/login'><Login></Login></NonePrivateRoute>
            <NonePrivateRoute path='/register'><Register></Register></NonePrivateRoute>
          </ContentWrapper>
        </BodyWrapper>
        <div>
          foot
        </div>
        </BrowserRouter>
      </ProvideAuth>
    </ApolloProvider>
  );
}

export default App;
