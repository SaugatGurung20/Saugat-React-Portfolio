import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">Saugat Gurung</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/work" className="nav-link">Work</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
