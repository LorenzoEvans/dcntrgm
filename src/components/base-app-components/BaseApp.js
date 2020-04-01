import React, { Component } from 'react'

export default class BaseApp extends Component {

  render() {
    const { handleSignOut } = this.props;
    return (
      <>
      <ul className="collapsible">
        <li>
          <div className="collapsible-header">First</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>stuff</li>
        <li>stuff</li>
        <li>stuff</li>
        <li>stuff</li>
        </ul>
        <button onClick={handleSignOut}>
        Signout
        </button>
      </>
    )
  }
}
