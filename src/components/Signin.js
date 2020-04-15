import React, { Component, useState } from 'react';
import '../styles/sign-in.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
      <div className="center">
        <h1 className="display-4">Welcome To DCNTRGM</h1>
        <p className="lead">
          A space for phototopical, thoughtful, community based discussions.
        </p>
      </div>
        <hr className="my-4"/>

      </div>
    );
  }
}
