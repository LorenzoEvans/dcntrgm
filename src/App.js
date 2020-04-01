import React, { Component } from 'react';
import Profile from './components/Profile.js';
import Signin from './components/Signin.js';
import { Route, Link } from 'react-router-dom';
import './App.scss';

import {
  UserSession,
  AppConfig
} from 'blockstack';

const appConfig = new AppConfig()
const userSession = new UserSession({ appConfig: appConfig })

export default class App extends Component {


  handleSignIn = (e) => {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  handleSignOut = (e) => {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="primary-color full-vh">
        <nav >
          <div className="nav-wrapper">
            <ul className="full-width flexrow-around-align-center full-height">
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
            onClick={ this.handleSignIn}
          >
            Sign In with Blockstack
          </button>
            </ul>
          </div>
        </nav>
        <div className="site-wrapper-inner">
          { !userSession.isUserSignedIn() ?
            <Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
            : <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />
          }
        </div>
      </div>
    );
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        window.history.replaceState({}, document.title, "/")
        this.setState({ userData: userData})
      });
    }
  }
}
