import React from 'react';
import NavBar from '../components/NavBar';
import FetchButton from '../containers/FetchButtonContainer';
import FlickrContainer from '../containers/FlickrContainer';

export const CoreLayout = ({ children }) => (
  <div>
    <NavBar />
    <FetchButton />
    <FlickrContainer />
  </div>
);

export default CoreLayout;
