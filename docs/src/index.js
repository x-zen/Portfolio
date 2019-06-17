import React from 'react';
import ReactDOM from 'react-dom';

//React Router
import { BrowserRouter as Router} from 'react-router-dom';

import App from './comps/App.js';// Main App Component


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
