import React from 'react';
import '../styles/Header.scss';

const Header = () => {
    return (
        <header className="py-4">
            <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand text-uppercase fw-bold" href="/">
                        <span className="bg-primary bg-gradient p-1 rounded-3 text-light">Lucas</span> Durietz
                    </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#lucas">Qui suis-je ?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#expertise">Expertises</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
    );
};

export default Header;
