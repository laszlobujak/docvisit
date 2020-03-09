import React from 'react'
import { Link } from "react-router-dom";

import './footer.style.scss';

const Footer = () => (
  <div className="footer-container">
    <div className="menu-item">
      <a class="nav-link" href="#">
        Menuitem
      </a>
      <a class="nav-link" href="#">
        Menuitem
      </a>
    </div>
    <div id="nurse-and-doctor"></div>
    <div className="social">
      <Link to="/">
        <div id="instagram" className="icon"></div>
      </Link>
      <Link to="/">
        <div id="facebook" className="icon"></div>
      </Link>
    </div>
  </div>
);

export default Footer;