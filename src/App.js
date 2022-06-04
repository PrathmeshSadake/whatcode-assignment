import React from 'react';
import { Container } from 'react-bootstrap';
import About from './component/About';
import CorporateResponsibility from './component/CorporateResponsibility';
import CustomNavbar from './component/CustomNavbar';
import Description from './component/Description';
import FoundersMessage from './component/FoundersMessage';
import GroupCompanies from './component/GroupCompanies';
import HeroGrid from './component/HeroGrid';
import Mission from './component/Mission';
import Vision from './component/Vision';

const App = () => {
  return (
    <div>
      <CustomNavbar />
      <About />
      <HeroGrid />
      <div
        style={{ backgroundColor: '#1f1f1f', height: '10rem', width: '100%' }}
      />
      <Description />
      <Vision />
      <Mission />
      <CorporateResponsibility />
      <FoundersMessage />
      <GroupCompanies />
    </div>
  );
};

export default App;
