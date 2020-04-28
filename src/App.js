import React, { Component } from 'react';
import Profile from './components/Profile.js';
import Signin from './components/Signin.js';
import BaseApp from './components/base-app-components/BaseApp';
import { Route, Link, Switch } from 'react-router-dom';
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
        <div>
        <div>
          { !userSession.isUserSignedIn() ?
            <Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
            : <Switch>
                <Route exact path="/">
                  <BaseApp userSession={userSession} handleSignOut={ this.handleSignOut } />
                </Route>
            </Switch>
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
