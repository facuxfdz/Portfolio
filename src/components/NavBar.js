import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="logo.png"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  href="#!"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={false}
                  offset={-20}
                  duration={200}
                >About</Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  href="#!"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={false}
                  offset={-20}
                  duration={200}
                >Projects</Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  href="#!"
                  activeClass="active"
                  to="formation"
                  spy={true}
                  smooth={false}
                  offset={-20}
                  duration={200}  
                >Formation</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
 
export default NavBar;