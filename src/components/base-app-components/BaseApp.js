import React, { Component } from 'react'

export default class BaseApp extends Component {

  render() {
    const { handleSignOut } = this.props;
    return (
      <>
        <button onClick={handleSignOut}>
        Signout
        </button>
      </>
    )
  }
}
