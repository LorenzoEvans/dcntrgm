import React, { Component } from 'react';
import Profile from './components/Profile.js';
import Signin from './components/Signin.js';
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
      <div className="site-wrapper">
        <nav >
          <div className="nav-wrapper flex-row-between">
            <ul className="full-width">
              <li className="nav-bar-text">
                DCNTRGM
              </li>
              <li className="nav-bar-text">
                About
              </li>
              <li className="nav-bar-text">
                FAQ
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
