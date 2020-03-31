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
      <div className="site-wrapper primary-color full-vh">
        <nav className="h-20-pc">
          <div className="nav-wrapper primary-dark">
            <ul className="full-width flexrow-around-align-center">
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
