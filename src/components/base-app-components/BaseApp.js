import React, { Component } from 'react';
import "../../styles/_globals.scss";
import "./BaseApp.scss";
export default class BaseApp extends Component {

  render() {
    const { handleSignOut } = this.props;
    return (
      <>
      <nav className="nav-extended flex-row-even">
        <div className="nav-wrapper flex-row-even sn-shadow-micro w-30-pc">
          DCNTRGM
        </div>
        <div className="full-width full-height">
          <ul className="tabs tabs-transparent flex-row-even">
          <li className="tab nav-bar-text self-center"><a href="#">The Commons</a></li>
            {/* React router links will be needed 
              link to the url in the href here
              then in App, make routers for these links
              may need to do subroutes
            */}
            <li className="tab nav-bar-text"><a href="#">Phototopics</a></li>
            <li className="tab nav-bar-text"><a href="#">Profile</a></li>
          </ul>
        </div>
      </nav>
      {/* <ul className="collapsible">
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
        </button> */}
      </>
    )
  }
}
