import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HeroGrid = () => {
  return (
    <Container
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      className='py-5'
    >
      <img className='py-5' src='/assets/logo-sub.png' alt='Logo' />
      <Row style={{ width: '80%' }} className='mx-auto g-5'>
        <Col>
          <div
            style={{
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              transition: '0.3s',
              padding: '4rem 3rem',
              textAlign: 'center',
              borderRadius: '10px',
              height: '100%',
            }}
          >
            <img src='/assets/clock.png' height={'75px'} alt='' />
            <p
              style={{
                textAlign: 'left',
                marginTop: '2rem',
              }}
            >
              Our track record has been impeccable with project completion on
              time and have surpassed expectations many a time, society members
              have positively received our redevelopment plans and encourage our
              modern and urbane designs to their neighbours.{' '}
            </p>
          </div>
        </Col>
        <Col>
          <div
            style={{
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              transition: '0.3s',
              padding: '4rem 3rem',
              textAlign: 'center',
              borderRadius: '10px',
              height: '100%',
            }}
          >
            <img src='/assets/star.png' height={'75px'} alt='' />
            <p
              style={{
                textAlign: 'left',
                marginTop: '2rem',
              }}
            >
              The Hetali Group is a redeveloper like no other with a profound
              focus on quality and long term satisfaction of its residents.
            </p>
          </div>
        </Col>
      </Row>
      <Row style={{ width: '80%' }} className='mx-auto g-5 mt-3'>
        <Col>
          <div
            style={{
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              transition: '0.3s',
              padding: '4rem 3rem',
              textAlign: 'center',
              borderRadius: '10px',
              height: '100%',
            }}
          >
            <img src='/assets/handshake.png' height={'75px'} alt='' />
            <p
              style={{
                textAlign: 'left',
                marginTop: '2rem',
              }}
            >
              They just don't endeavour but build homes which make it's
              residents proud of their address by putting home-owners at the
              heart and soul of everything they do from start to finish and post
              completion.
            </p>
          </div>
        </Col>
        <Col>
          <div
            style={{
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              transition: '0.3s',
              padding: '4rem 3rem',
              textAlign: 'center',
              borderRadius: '10px',
              height: '100%',
            }}
          >
            <img src='/assets/realestate.png' height={'75px'} alt='' />
            <p
              style={{
                textAlign: 'left',
                marginTop: '2rem',
              }}
            >
              Hetali Group lives by the ethos of building homes to live and not
              houses to stay in.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroGrid;
