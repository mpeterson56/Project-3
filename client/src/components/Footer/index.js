import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        &copy;{new Date().getFullYear()} by Tutor Coin Team
      </div>
    </footer>
  );
};

export default Footer;