import React from 'react';
import NavBar from '../components/NavBar.jsx';
import FetchButton from '../containers/FetchButtonContainer';
import ResultContainer from '../containers/ResultContainer';
import Sidebar from '../containers/SidebarContainer';
import Globe from '../containers/GlobeContainer';

export const CoreLayout = ({ children }) => (
  <div>
    <NavBar />
    <FetchButton />
    <Sidebar />
    <Globe />
    <ResultContainer />
  </div>
);

export default CoreLayout;
