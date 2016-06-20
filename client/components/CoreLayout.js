import React from 'react';
import NavBar from '../components/NavBar';
// import Button from '../components/Button';
import FetchButton from '../containers/FetchButtonContainer';

export const CoreLayout = ({ children }) => (
  <div>

    <NavBar />
    <FetchButton />

  </div>
);

export default CoreLayout;
