import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/chat'>Chat</Link>
          <br />
          <Route exact path='/' component={Home}></Route>
          <Route path='/chat' component={Chat}></Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
