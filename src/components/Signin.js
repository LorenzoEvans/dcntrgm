import React, { Component } from 'react';
import '../styles/sign-in.scss';
export default class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="landing-heading center">
      Welcome to DCNTRGM
      </div>
    );
  }
}
