import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.style.scss';

//import components
import Nav from '../../components/nav/nav.component';
import Footer from '../../components/footer/footer.component';
import Statistics from '../../components/statistics/statistics.component';

function HomePage() {
  return (
    <div>
      <Nav></Nav>
      <div className="main-container">
        <div className="text-container">
          <h2 id="main-title">
            <div id="hearth"></div>DocVisit<p>.</p>
          </h2>
          <div id="informal-text">
            Nowadays everything has moved to the internet.

          <ul id="list">
            <li>We communicate</li>
            <li>work</li>
            <li>shop online</li>
          </ul> 
          <span>BUT </span> 
            why do we still have to pick up the phone
            to get an appointment to our doctor? DocVisit tries to solve that
            problem for you.
          </div>
          <button id="read-more">
            <Link to="/signup">
              <p>Try now</p>
            </Link>
          </button>
        </div>
        <div id="main-blue-shape">
          <div id="workers"></div>
        </div>
      </div>
      <Statistics />
      <div id="quote">
        <h1>
          “Health is not valued until<br></br> sickness comes”{' '}
        </h1>
        <p> ~ Thomas Fuller</p>
      </div>
      <div className="doctors-and-infos">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div id="stethoscope" className="side-pictures"></div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div className="text">
                <h2>Doctors</h2>
                <p>
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Link to="/doctors">
                  <button className="more-infos">Read more...</button>
                </Link>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <div className="text">
                  <h2>Choose us</h2>
                  <p>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <button className="more-infos">Read more...</button>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div id="medical" className="side-pictures"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;


