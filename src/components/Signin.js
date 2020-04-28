import React, { Component, useState } from 'react';
import '../styles/sign-in.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SimplePaper from './Phototopic'

const conversation_1 = 'https://images.unsplash.com/photo-1554896485-c6d2cc4111a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80';
export default class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="full-vh flex-column-around">
      <nav className="nav-wrapper">
        <div className="">
          <ul className="full-width flexrow-between-align-center full-height">
            <li className="site-name site-name-shadow lttr-spacing animated bounceInRight slower">
              DCNTRGM
            </li>
            <li>
              <a className="nav-bar-text text-decoration-none animated bounceInRight slower delay-1s" href="/about">
              About
              </a>
            </li>
            <li>
              <a className="nav-bar-text text-decoration-none animated bounceInRight slower delay-1s" href="/FAQ">
              FAQ
              </a>
            </li>
            <button
          className="btn btn-outline-light no-deco animated lightSpeedIn delay-2s hvr-ripple-out"
          // id="signin-button"
          onClick={ handleSignIn}
        >
          Sign In with Blockstack
        </button>
          </ul>
        </div>
      </nav>
      <div className='primary-color full-height flex-column-evenly self-center'>
        <h1 className="jumbo-text">Welcome To DCNTRGM</h1>
        <p className="container-text">
          A space for phototopical, thoughtful, community based discussions.
        </p>
        <SimplePaper className="primary-color" />
      </div>
      </div>
    );
  }
}
