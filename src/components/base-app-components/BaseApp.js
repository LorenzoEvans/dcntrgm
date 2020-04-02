import React, { Component } from 'react';
import "../../styles/_globals.scss";
export default class BaseApp extends Component {

  render() {
    const { handleSignOut } = this.props;
    return (
      <>
      <nav className="nav-extended">
        <div className="nav-wrapper flex-row-even">
          <a href="#">Phototopics</a>
          <li>hi</li>
          <li>yo</li>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
          <li className="tab"><a href="#">Tab 1</a></li>
            {/* React router links will be needed 
              link to the url in the href here
              then in App, make routers for these links
              may need to do subroutes
            */}
            <li className="tab"><a href="#">Tab 2</a></li>
            <li className="tab">Tab 3</li>
          </ul>
        </div>
      </nav>
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
