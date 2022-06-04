import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <div style={{ textAlign: 'center' }} className='pt-5'>
      <h3 className='py-2'>ABOUT US</h3>
      <img className='py-2' src='/assets/logo-sub.png' alt='Logo' />
      <img src='/assets/about-banner.png' width={'100%'} alt='Logo' />
      <p className='py-5 mx-auto' style={{ fontWeight: 'bold', width: '50%' }}>
        We endeavour to build homes which make it's residents happy and proud of
        their address. Residents are at heart of everything we do, we build
        homes to live in, not houses to stay in.
      </p>
    </div>
  );
};

export default About;
