import React from 'react';
import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import login from './pages/Login';
import chatpage from './pages/Chatpage';

function App() {
  return (
    <Router>
      <Switch>
        
        <Route path='/chat' component={chatpage} />
        <Route exect path='/' component={login} />
      </Switch>
    </Router>
  );
}

export default App;
