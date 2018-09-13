import React, { Component } from "react";

class Header extends Component {

  render() {
    console.log(this.props);
    return (
      <nav style={{position: 'fixed', background:'rgba(0,0,0,0.2', padding: '0px 0px'}}>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo indigo-text text-darken-4">IdealApplicant</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="#"><span class="indigo-text text-darken-4">Match Rate</span></a></li>
            <li><a href="#"><span class="indigo-text text-darken-4">ATS Match</span></a></li>
            <li><a href="#"><span class="indigo-text text-darken-4">Keyword Comparison</span></a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }

export default Header;
