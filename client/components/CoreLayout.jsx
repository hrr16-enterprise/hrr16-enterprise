import React from 'react';
import NavBar from '../components/NavBar.jsx';
import FetchButton from '../containers/FetchButtonContainer';
import ResultContainer from '../containers/ResultContainer';
import Globe from '../containers/GlobeContainer';

export const CoreLayout = ({ children }) => (
  <div>
    <NavBar />
    <FetchButton />
    <Globe />
    <ResultContainer />
  </div>
);

export default CoreLayout;
