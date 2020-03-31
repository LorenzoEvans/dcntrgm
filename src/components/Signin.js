import React, { Component } from 'react';
import '../styles/sign-in.scss';
export default class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div class="">
        <h1 className="landing-heading center">Welcome to DCNTRGM</h1>
        <p className="lead center">
          <button
            className="btn btn-primary btn-lg"
            id="signin-button"
            onClick={ handleSignIn}
          >
            Sign In with Blockstack
          </button>
        </p>
      </div>
    );
  }
}
