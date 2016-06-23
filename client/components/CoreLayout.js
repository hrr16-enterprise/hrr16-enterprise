import React from 'react';
import NavBar from '../components/NavBar';
import FetchButton from '../containers/FetchButtonContainer';
import FlickrContainer from '../containers/FlickrContainer';
import ResultContainer from '../containers/ResultContainer';

export const CoreLayout = ({ children }) => (
  <div>
    <NavBar />
    <FetchButton />
    <ResultContainer />
  </div>
);

export default CoreLayout;
