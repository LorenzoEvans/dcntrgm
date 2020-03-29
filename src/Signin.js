import React, { Component } from 'react';
import './styles/sign-in.scss';
export default class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div >
        <h1 className="landing-heading text-test">Welcome to DCNTRGM</h1>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signin-button"
            onClick={ handleSignIn.bind(this) }
          >
            Sign In with Blockstack
          </button>
        </p>
      </div>
    );
  }
}
