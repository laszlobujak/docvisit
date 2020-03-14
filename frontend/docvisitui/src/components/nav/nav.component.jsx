import React from 'react';
import { Link } from 'react-router-dom';

//style
import './nav.style.scss';

//import common functions
import { show_div_element, hide_div_element } from '../../common-functions';

const Nav = () => {
  const toggleCallWindow = e => {
    show_div_element(document.getElementsByClassName('promt-window')[0]);
    setTimeout(() => {
      hide_div_element(document.getElementsByClassName('promt-window')[0]);
    }, 1200);
  };

  return (
    <nav className="navbar navbar-expand-lg nav-container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup">Sign up</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Log in</Link>
          </li>
        </ul>

        <button className="nav-link" href="#" onClick={toggleCallWindow}>
          Call<i className="material-icons">phone</i>
        </button>
        <button className="nav-link" href="#">
          Chat <i className="material-icons">chat_bubble_outline</i>
        </button>

        <div className="hidden promt-window">
          <h5>Phone number : +3040506000000</h5>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
