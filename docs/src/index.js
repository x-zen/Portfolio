import React from 'react';
import ReactDOM from 'react-dom';

//React Router
import { BrowserRouter as Router} from 'react-router-dom';

import './index-reset.css';// Meyer's Reset CSS
import App from './comps/App';// Main App Component


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
