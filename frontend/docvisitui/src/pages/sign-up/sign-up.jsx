import React from 'react'

import './sign-up.style.scss';

//import components
import Nav from '../../components/nav/nav.component';

function SignUp(){
    return (
      <div>
        <Nav></Nav>
        <h1 className="align-text">Sign up</h1>
        <p className="dot-separator align-text">.......</p>
        <div className="form-container">
        <form >
            <div class="form-group">
              <label for="exampleInputEmail1">Full name</label>
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="Enter your name..."
              ></input>
            </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            ></input>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            ></input>
            <label class="form-check-label" for="exampleCheck1">
              Privacy policy
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
      </div>
    );
}

export default SignUp;