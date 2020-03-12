import React from 'react'
import { Link } from "react-router-dom";

//style
import './nav.style.scss';

//import common functions
import {show_div_element, hide_div_element} from '../../common-functions';

function Nav(){


  let toggleCallWindow = () => {
    show_div_element(document.getElementsByClassName("promt-window")[0]);
    setTimeout(()=>{
      hide_div_element(document.getElementsByClassName("promt-window")[0]);
    },1200)
  }

  return(
    <nav class="navbar navbar-expand-lg nav-container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/signup">Sign up</Link>
          </li>
          <li class="nav-item">
            <Link to="/login">Log in</Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="nav-link" href="#" onClick={toggleCallWindow}>
            Call<i class="material-icons">phone</i>
          </button>
          <button class="nav-link" href="#" >
            Chat <i class="material-icons">chat_bubble_outline</i>
          </button>
        </form>
        <div className="hidden promt-window">
          <h5>Phone number : +3040506000000</h5>
        </div>
      </div>
    </nav>
  )
}

export default Nav;