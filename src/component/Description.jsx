import React from 'react';
import { Container } from 'react-bootstrap';

const Description = () => {
  return (
    <div
      className='mx-auto py-5'
      style={{
        backgroundColor: '#ffffff',
        padding: '5rem',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cg fill='%23cfcfcf' fill-opacity='0.4'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' opacity='.5'%3E%3C/path%3E%3Cpath d='M15 15h50l-5 5H20v40l-5 5V15zm0 50h50V15L80 0v80H0l15-15zm32.07-32.07l3.54-3.54A15 15 0 0 1 29.4 50.6l3.53-3.53a10 10 0 1 0 14.14-14.14zM32.93 47.07a10 10 0 1 1 14.14-14.14L32.93 47.07z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div
        style={{
          boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2)`,
          padding: '5rem',
          width: '60%',
          textAlign: 'center',
          backgroundColor: '#f7f7f7',
        }}
        className='mx-auto'
      >
        <p style={{ lineHeight: '150%' }}>
          Established in 1992, Hetali Group is a leading real estate developer
          of residential spaces across Mumbai and have earned an unmatched
          reputation amongst its very loyal customers. The company's
          customer-centric values, project management proficiency and technical
          expertise are amplified with over 6.5 lakh sq.ft. built and almost 1
          lakh sq.ft underway leading to more than families!
        </p>
        <p style={{ lineHeight: '150%' }}>
          The Hetali Group promises a lifestyle second to none. In a span of
          over four decades, the group has proved to be one of the most reputed
          real estate builders in the western suburbs of Mumbai with residences
          in prime locations such as Andheri, Goregaon, Vile Parle and Juhu.
        </p>
        <p style={{ lineHeight: '150%' }}>
          Spearheaded by Mr Jayesh Pandya, the company's central ideology is to
          provide homes customized to the customer's requirements and home’s
          that are superior in nature keeping in mind the needs of the modern
          home user.
        </p>
      </div>
    </div>
  );
};

export default Description;
