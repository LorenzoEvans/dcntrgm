import React, { Component } from 'react';
import '../styles/sign-in.scss';
export default class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="primary-color full-vh">
      <nav >
        <div className="nav-wrapper">
          <ul className="full-width flexrow-between-align-center full-height">
            <li className="site-name site-name-shadow lttr-spacing">
              DCNTRGM
            </li>
            <li>
              <a className="nav-bar-text" href="/about">
              About
              </a>
            </li>
            <li>
              <a className="nav-bar-text" href="/FAQ">
              FAQ
              </a>
            </li>
            <button
          className="btn btn-outline-light no-deco"
          // id="signin-button"
          onClick={ handleSignIn}
        >
          Sign In with Blockstack
        </button>
          </ul>
        </div>
      </nav>
      <div className="landing-heading center">
      Welcome to DCNTRGM
      </div>
      </div>
    );
  }
}
