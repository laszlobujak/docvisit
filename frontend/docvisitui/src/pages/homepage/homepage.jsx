import React from 'react'

import './homepage.style.scss';

//import components
import Nav from '../../components/nav/nav.component';

function HomePage(){

    return (
      <div>
        <Nav></Nav>
        <div className="main-container">
          <div className="text-container">
            <h2 id="main-title">
              <div id="hearth"></div>Lorem ipsum<p>.</p>
            </h2>
            <p id="informal-text">
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button id="read-more">Lorem ipsum</button>
          </div>
          <div id="main-blue-shape"></div>
        </div>
      </div>
    );
}

export default HomePage;