import React from 'react';
import { Component } from 'react';

export default class Button extends Component {

  render() {
    return (
      <div className="button">
        <button>"The World in a minute"</button>
      </div>
    );
  }
}


// export const Button = ({ children }) => (
//   <div className="button">
//     <button>"The World in a minute"</button>
//   </div>
// );

export default Button;
