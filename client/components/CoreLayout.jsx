import React from 'react';
import NavBar from '../components/NavBar.jsx';
import FetchButton from '../containers/FetchButtonContainer';
import ResultContainer from '../containers/ResultContainer';
import YoutubeContainer from '../containers/YoutubeContainer';
import Globe from '../containers/GlobeContainer';

export const CoreLayout = ({ children }) => (
  <div>
    <NavBar />
    <FetchButton />
    <ResultContainer />
    <Globe />
  </div>
);

export default CoreLayout;
