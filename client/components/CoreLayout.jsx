import React from 'react';
import NavBar from '../containers/NavBarContainer';
import FetchButton from '../containers/FetchButtonContainer';
import ResultContainer from '../containers/ResultContainer';
import Sidebar from '../containers/SidebarContainer';
import Globe from '../containers/GlobeContainer';
import About from '../containers/AboutContainer';

export const CoreLayout = ({ children }) => (
  <div>
    <NavBar />
    <FetchButton />
    <Sidebar />
    <Globe />
    <ResultContainer />
    <About />
  </div>
);

export default CoreLayout;
