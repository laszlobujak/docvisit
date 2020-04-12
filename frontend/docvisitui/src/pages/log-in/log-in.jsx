import React, {useState} from 'react'
import axios from 'axios';

import './log-in.style.scss';
import Nav from '../../components/nav/nav.component';

function LogIn(){
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  function postLogin(event) {
    event.preventDefault()
    axios.post('http://localhost:8000/users/login', { email, password })
      .then(result => {
        if (result.status === 200) {
          console.log(result)
        }
      })
      .catch((error) => console.log(error))

  }

    return (
      <div>
        <Nav />
        <div id="frame">
        <h1 className="align-text">Log in</h1>
        <div className="form-container">
            <form onSubmit={postLogin}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
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
            <button type="submit" class="btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
        </div>
      </div>
    );
}

export default LogIn;