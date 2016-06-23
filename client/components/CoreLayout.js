import React from 'react';
import NavBar from '../components/NavBar';
import FetchButton from '../containers/FetchButtonContainer';
import FlickrContainer from '../containers/FlickrContainer';
import ResultContainer from '../containers/ResultContainer';
import Globe from '../containers/GlobeContainer';

export const CoreLayout = ({ children }) => (
  <div>
    <NavBar />
    <FetchButton />
    <ResultContainer />
    <FlickrContainer />
    <Globe />
  </div>
);

export default CoreLayout;
