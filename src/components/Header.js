import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import Payments from "./Payments";

class Header extends Component {
  // renderContent() {
  //   switch (this.props.auth) {
  //     case null:
  //       return; {/*Dont do anything*/}
  //     case false:
  //       return (
  //         <li>
  //           <a href="/auth/google">Login With Google</a> {/*If user is not logged in, render text in header*/}
  //         </li>
  //       );
  //     default:
  //       return [
  //         <li key="1"> <Payments /> </li>, 
  //         <li key="2">
  //           <a href="/api/logout">Logout</a> {/*If user is logged in, render 'Logout' in header*/}
  //         </li>
  //       ];
  //   }
  // }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
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
