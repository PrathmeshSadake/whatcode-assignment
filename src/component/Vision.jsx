import React from 'react';
import { Container } from 'react-bootstrap';

const Vision = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://source.unsplash.com/W_5Eakb1598')`,
        paddingTop: '5rem',
        paddingBottom: '5rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '55%',
          color: 'white',
        }}
        className='mx-auto text-center'
      >
        <h1>Vision</h1>
        <p style={{ fontWeight: 'bold' }}>
          We aim to ensure top-class service to our stakeholders &amp; diversify
          our business to other service-oriented sectors with the ultimate goal
          of achieving customer satisfaction &amp; end-user interaction.
        </p>
      </div>
    </div>
  );
};

export default Vision;
