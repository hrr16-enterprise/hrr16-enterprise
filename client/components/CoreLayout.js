import React from 'react';
import NavBar from '../components/NavBar';
import FetchButton from '../containers/FetchButtonContainer';

export const CoreLayout = ({ children }) => (
  <div>
    <NavBar />
    <FetchButton />
  </div>
);

export default CoreLayout;
