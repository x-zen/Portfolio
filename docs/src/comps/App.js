import React from 'react';

// React Router
import { Route, Switch } from 'react-router-dom';

// Components
import Navigation from './Navigation/Navigation.js';
import Home from './Home/Home.js';
import Portfolio from './Portfolio/Portfolio.js';
import Err404 from './Err404/Err404.js';
import './App.css';// Global Style Sheet


function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="main-cont">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={Err404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
