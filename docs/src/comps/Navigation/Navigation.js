import React from 'react';

// React Router
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="navigation">
        <h2>Navigation</h2>

        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    )
  }
}

export default Navigation;
