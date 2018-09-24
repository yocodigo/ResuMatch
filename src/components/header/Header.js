import React, { Component } from "react";
import "./index.css"

class Header extends Component {

  render() {
    console.log(this.props);
    return (
      <nav>
        <div>
          <h3><a href="#">IdealApplicant</a></h3>
          <ul>
            <li><a href="#first">Match Rate</a></li>
            <li><a href="#second">ATS Match</a></li>
            <li><a href="#three">Keyword Comparison</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
