import React from 'react';

// React Router
import { Link } from 'react-router-dom';

import './Navigation.css';// Style Sheet


class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="navigation">
        <div className="nav-logo">
          <h1>X-ZEN</h1>
        </div>

        <nav className="nav">
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/about">About</Link>
          <Link className="navLink" to="/portfolio">Portfolio</Link>
        </nav>
      </div>
    )
  }
}

export default Navigation;
