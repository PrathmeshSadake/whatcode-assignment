import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg='light' variant='light'>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Navbar.Brand href='#home'>
          <img src='/assets/logo.png' alt='' height={'50px'} />
        </Navbar.Brand>
        <Nav
          // className='ms-auto'
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Nav.Link href='#home'>About Us</Nav.Link>
          <Nav.Link href='#features'>Projects</Nav.Link>
          <Nav.Link href='#pricing'>Diversification</Nav.Link>
          <Nav.Link href='#pricing'>Our Process</Nav.Link>
          <Nav.Link href='#pricing'>Testimonials</Nav.Link>
          <Nav.Link href='#pricing'>Careers</Nav.Link>
          <Nav.Link href='#pricing'>Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
