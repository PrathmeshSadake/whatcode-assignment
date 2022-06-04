import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const GroupCompanies = () => {
  return (
    <Container className='py-5 text-center'>
      <h3>GROUP COMPANIES</h3>
      <img className='pb-5 pt-3' src='/assets/logo-sub.png' alt='Logo' />
      <Row>
        <Col>
          <img
            src='https://source.unsplash.com/2oYMwuFgnTg'
            alt=''
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            }}
          />
          <h3 style={{ textAlign: 'center' }} className='my-3'>
            Agriculture
          </h3>
        </Col>
        <Col xs={5}>
          <img
            src='https://source.unsplash.com/fWr4f79RdXA'
            alt=''
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            }}
          />
          <h3 style={{ textAlign: 'center' }} className='my-4'>
            Fuel
          </h3>
        </Col>
        <Col>
          <img
            src='https://source.unsplash.com/UC0HZdUitWY'
            alt=''
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            }}
          />
          <h3 style={{ textAlign: 'center' }} className='my-4'>
            Food
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default GroupCompanies;
