import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 EstateEase. All Rights Reserved.</p>
      <p><Link to="/terms" className="Footerms">Terms and Conditions</Link></p>
      <p>estateease@gmail.com</p>
    </footer>
  );
};

export default Footer;
