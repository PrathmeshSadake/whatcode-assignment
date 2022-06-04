import React from 'react';
import { Container } from 'react-bootstrap';

const FoundersMessage = () => {
  return (
    <div
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
          width: '80%',
          textAlign: 'center',
          backgroundColor: '#fff',
        }}
        className='mx-auto'
      >
        <h3>Founders Message</h3>
        <div>
          <img
            src='https://source.unsplash.com/WNoLnJo7tS8'
            height='150px'
            width='150px'
            style={{ objectFit: 'cover', borderRadius: '100%' }}
            alt=''
          />
        </div>
        <img className='py-2' src='/assets/logo-sub.png' alt='Logo' />

        <h2 className='py-3'>Mr. Jayesh H. Pandya</h2>
        <h5 className='py-5'>
          “When a customer buys a home, he is giving up a major chunk of his
          life's savings to do so. It is imperative to give him exactly what he
          looks for in his home.”
        </h5>
        <p className='py-5'>
          We bring to our clients much wanted human values, integrity, trust and
          an assurance of responsibility all coupled with our expertise in
          construction, engineering & management. Our biggest assets have always
          been our small but highly trained team of professional managers and
          engineers who are backed by a very able team of administrators. We
          have a clear vision about building on our strengths and our
          achievements while holding dear to us our basic principles
        </p>
      </div>
    </div>
  );
};

export default FoundersMessage;
