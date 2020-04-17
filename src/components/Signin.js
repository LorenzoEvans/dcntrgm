import React, { Component, useState } from 'react';
import '../styles/sign-in.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const conversation_1 = 'https://images.unsplash.com/photo-1554896485-c6d2cc4111a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80';
export default class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="primary-color full-vh">
      <nav>
        <div className="nav-wrapper">
          <ul className="full-width border-test flexrow-between-align-center full-height">
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
      <hr className="my-4"/>
      <div className="container full-width border-test">
        <div className="bg-image"></div>
        <h1 className="display-4 container-text">Welcome To DCNTRGM</h1>
        <p className="lead container-text">
          A space for phototopical, thoughtful, community based discussions.
        </p>
      </div>
      </div>
    );
  }
}
