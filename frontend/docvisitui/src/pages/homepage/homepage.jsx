import React from 'react'
import {Link} from 'react-router-dom';

import './homepage.style.scss';

//import components
import Nav from '../../components/nav/nav.component';
import SbsForm from '../../components/step-by-step-form/sbs-form.component';
import Footer from '../../components/footer/footer.component';

function HomePage(){

    return (
      <div>
        <Nav></Nav>
        <div className="main-container">
          <div className="text-container">
            <h2 id="main-title">
              <div id="hearth"></div>DocVisit<p>.</p>
            </h2>
            <p id="informal-text">
              Nowadays everything has moved to the internet. We communicate, work and even shop online. But why do we still have to pick up the phone to get an appointment to our doctor?
              DocVisit tries to solve that problem for you.
            </p>
            <button id="read-more"><Link to="/signup"><p>Try now</p></Link></button>
          </div>
          <div id="main-blue-shape">
            <div id="workers"></div>
          </div>
        </div>
        <h1 id="form-title">Easy to use</h1>
        <p className="dot-separator align-text">............</p>
        <SbsForm></SbsForm>
        <div id="quote">
          <h1>
            “Health is not valued until<br></br> sickness comes”{" "}
          </h1>
          <p> ~ Thomas Fuller</p>
        </div>
        <div className="doctors-and-infos">
          <div id="stethoscope"></div>
          <div className="text">
            <h2>Doctors</h2>
            <p>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/doctors">
              <button className="more-infos">Read more...</button>
            </Link>
          </div>
          <div className="text">
            <h2>Choose us</h2>
            <p>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="more-infos">Read more...</button>
          </div>
          <div id="medical"></div>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default HomePage;