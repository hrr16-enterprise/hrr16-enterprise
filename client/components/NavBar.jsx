import React from 'react';
import Vivus from "vivus";
import Auth from '../containers/AuthContainer';

export const NavBar = ({ children }) => (
  <div>
    <div className="appTitle">M  
      <svg version="1.1" id="svg" height="75" width="58">
        <ellipse data-start="10" data-duration="20" fill="none" stroke="#85E6AD" stroke-width="10" stroke-miterlimit="10" cx="28.9" cy="46.1" rx="27.6" ry="27.3"/>
        <polygon fill="none" stroke="#85E6AD" stroke-width="10" stroke-miterlimit="10" points="22.1,43.1 16.7,40.4 11.2,39.5 10,36.5 10.4,32.4 14.3,33 16.4,34.3 15.9,30.5 16.4,27.8 17.9,25.9 
          20.2,25.9 19.8,22.6 17.8,22.6 16.3,23.6 13.4,23.9 5.1,34 6.8,38.9 10.2,41.6 8.1,47.6 9.2,50.1 12.4,51.3 13.4,59.7 16.3,64.2 
          17.6,60.8 22,52.2 23.5,51.4 "/>
        <polygon fill="none" stroke="#85E6AD" stroke-width="10" stroke-miterlimit="10" points="51.3,38.1 49.4,33.2 44.3,33.8 43.8,32.6 39.5,32.6 36,35.1 34.8,37.4 34.2,40.5 36.4,44.4 42.2,45.1 
          44,50.7 44.5,53.8 45.6,57.5 50.8,52.7 51.9,45.8 53.8,39.4 "/>
        <polygon fill="none" stroke="#85E6AD" stroke-width="10" stroke-miterlimit="10" points="51.4,30.8 45.2,24.5 38.8,24.5 40.4,26.2 37,27.1 38.8,29.6 42,29 43.4,28.7 43.4,27.1 45.3,27.1 
          47.4,29.6 46.6,31.8 "/>
        <path fill="none" stroke="#85E6AD" stroke-width="10" stroke-miterlimit="10" d="M27.7,19.1c-1.8-3.8-3.6-7.6-5.5-11.4c-0.4-3.5,2.6-6.4,5.7-6.3c3.1,0.1,5.8,3.2,5.2,6.6
          C31.4,11.7,29.6,15.4,27.7,19.1"/>
        <ellipse data-start="10" data-duration="20" fill="none" stroke="#85E6AD" stroke-width="10" stroke-miterlimit="10" cx="27.8" cy="6" rx="1.2" ry="1.2"/>
      </svg>
      mento
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
// 
//       // <svg version="1.1" id="svg" height="150" width="73">
      //   <path fill="none" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" d="M36,99.5"/>
      //   <path fill="none" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" d="M36,99.5"/>
      //   <path fill="none" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" d="M32.4-7.5"/>
      //   <circle className="circle" fill="none" stroke="#ffffff" stroke-width="3" stroke-miterlimit="10" cx="36" cy="99.5" r="10.4"/>
      //   <circle fill="none" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" cx="36" cy="99.5" r="18.6"/>
      //   <ellipse className="circle" fill="none" stroke="#ffffff" stroke-width="3" stroke-miterlimit="10" cx="36" cy="99.5" rx="26.7" ry="27.4"/>
      //   <circle fill="none" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" cx="36" cy="99.5" r="34.9"/>
      //   <path className="pin" fill="none" stroke="#ffffff" stroke-width="3" stroke-miterlimit="10" class="st0" d="M36,2C21.3,2.1,4.1,14.9,9.4,28.6L36,99.5l26.6-70.9C67.6,15.3,53.1,2,36,2z"/>
