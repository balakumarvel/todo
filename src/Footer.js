import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear(); // Get the current year

  return (
    <div className='footer '>
     <h2>&copy;copyright {year}</h2>
    </div>
  );
};

export default Footer;
