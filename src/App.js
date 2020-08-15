import React from 'react';
import axios from 'axios';
import StartMenu from './StartMenu';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="container">
      <Router> 
          <Switch>
              <Route exact  path="/game">
                
                <h1>START GAME</h1>
              </Route>
              <Route path="/">
                <StartMenu />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
