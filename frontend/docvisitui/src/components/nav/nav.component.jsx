import React from 'react'

//style
import './nav.style.scss';


const Nav = () => (
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
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Sign up
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Log in
          </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <a class="nav-link" href="#">
          Call<i class="material-icons">phone</i>
        </a>
        <a class="nav-link" href="#">
          Chat <i class="material-icons">chat_bubble_outline</i>
        </a>
      </form>
    </div>
  </nav>
);

export default Nav;