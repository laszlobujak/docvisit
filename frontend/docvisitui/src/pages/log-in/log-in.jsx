import React, {useState} from 'react'
import axios from 'axios';
import {Redirect} from 'react-router-dom'

import './log-in.style.scss';
import Nav from '../../components/nav/nav.component';

function LogIn(){
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  function postLogin(event) {
    event.preventDefault()
    axios.post('http://localhost:8000/users/login', { email, password })
      .then(result => {
        console.log(result)
        if (result.status === 200) {
          sessionStorage.setItem("token", result.data.token);
          sessionStorage.setItem("user_id", result.data.user._id)
        }
      },
      )
      .catch((error) => console.log(error))

  }
  if (sessionStorage.getItem("user_id")) {
    return <Redirect to={{
      pathname: '/account'
    }}
    />
  }
    return (
      <div>
        <Nav />
        <div id="frame">
        <h1 className="align-text">Log in</h1>
        <div className="form-container">
            <form onSubmit={postLogin}>
              <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>
            </div>
              <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>
              <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              ></input>
                <label className="form-check-label" htmlFor="exampleCheck1">
                Privacy policy
              </label>
            </div>
              <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
        </div>
      </div>
    );
}

export default LogIn;