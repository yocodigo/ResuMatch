import React, { Component } from "react";

class Header extends Component {

  render() {
    //console.log(this.props);
    return (
      <nav style={{position: 'fixed', background:'rgba(0,0,0,0.2', padding: '0px 0px'}}>
        <div className="nav-wrapper">
          <a href="google.com" className="brand-logo indigo-text text-darken-4">IdealApplicant</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="google.com"><span className="indigo-text text-darken-4">Match Rate</span></a></li>
            <li><a href="google.com"><span className="indigo-text text-darken-4">ATS Match</span></a></li>
            <li><a href="google.com"><span className="indigo-text text-darken-4">Keyword Comparison</span></a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
