import React, { Component, useState } from 'react';
import '../styles/sign-in.scss';
import Carousel from 'react-bootstrap/Carousel'
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
      {/* <div className="center">
        <h1 className="display-4">Welcome To DCNTRGM</h1>
        <p className="lead">
          A space for phototopical, thoughtful, community based discussions.
        </p>
      </div> */}
        <hr className="my-4"/>
      <Carousel className="text-on-prim border-test bg-secondary">
        <Carousel.Item className="border-test nav-bar-text bg-primary">
          hgfjfjh
          <Carousel.Caption className="border-test nav-bar-text">
            <h3 className="nav-bar-text">First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" alt="A group of people talking." src="/assets/conversation-1.jpeg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" alt="A group of people talking." src="/assets/conversation-1.jpeg"/>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
}
