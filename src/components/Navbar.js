import React from 'react'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {

  render() {
    return (
      <nav
        className="navbar is-fixed-bottom is-hidden-tablet"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div
            id="navMenu"
          >
            <div className="navbar-start has-text-centered">
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Home
              </a>
              <a className="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
