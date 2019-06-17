import React from 'react';

// React Router
import { Route, Switch } from 'react-router-dom';

// Components
import Navigation from './Navigation/Navigation.js';
import Home from './Home/Home.js';
import Err404 from './Err404/Err404.js';
import './App.css';// Global Style Sheet


function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Err404} />
      </Switch>
    </div>
  );
}

export default App;
