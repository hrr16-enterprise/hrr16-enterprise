import React from 'react';
import Login from '../containers/LoginContainer';

export const NavBar = ({ children }) => (
  <div>
    <p>Hello world!</p>
    <Login />
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
