import React from 'react';
import Vivus from "vivus";
import Auth from '../containers/AuthContainer';

export const NavBar = ({ children }) => (
  <div>
    <div className="appTitle">M  
      <svg version="1.1" id="svg" height="150" width="73">
        <path fill="none" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" d="M36,99.5"/>
        <path fill="none" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" d="M36,99.5"/>
        <path fill="none" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" d="M32.4-7.5"/>
        <circle className="circle" fill="none" stroke="#ffffff" stroke-width="3" stroke-miterlimit="10" cx="36" cy="99.5" r="10.4"/>
        <circle fill="none" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" cx="36" cy="99.5" r="18.6"/>
        <ellipse className="circle" fill="none" stroke="#ffffff" stroke-width="3" stroke-miterlimit="10" cx="36" cy="99.5" rx="26.7" ry="27.4"/>
        <circle fill="none" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" cx="36" cy="99.5" r="34.9"/>
        <path className="pin" fill="none" stroke="#ffffff" stroke-width="3" stroke-miterlimit="10" class="st0" d="M36,2C21.3,2.1,4.1,14.9,9.4,28.6L36,99.5l26.6-70.9C67.6,15.3,53.1,2,36,2z"/>
      </svg>
      MENTO
    </div>
    
    <Auth />
  </div>
);

export default NavBar;

// import React, { Component, PropTypes } from 'react';
// import * as actions from '../actions/index.js';

// export default class NavBar extends Component {

//   render() {
//     return (
//       <div className="container">
//         This is going to be a nav bar container!
//       </div>
//     );
//   }
// }
