import React, {useState} from 'react'
import axios from 'axios';
import {Redirect} from 'react-router-dom';

//styles
import './sign-up.style.scss';

//import components
import Nav from '../../components/nav/nav.component';

function SignUp(){
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  function postSignup(event) {
    event.preventDefault()
    axios.post('http://localhost:8000/users', { name, email, password })
      .then(result => {
        if (result.status === 201) {
              sessionStorage.setItem("token", result.data.token);
              sessionStorage.setItem("user_id", result.data.user._id)
          }
      })
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
        <Nav></Nav>
        <div id="frame">
          <h1 className="align-text">Sign up</h1>
          <div className="form-container">
            <form onSubmit={postSignup}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Full name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  className="form-control"
                  id="fullName"
                  placeholder="Enter your name..."
                ></input>
              </div>
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
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
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
              <button type="submit" className="btn btn-dark sign-up-button">
              Submit
            </button>
          </form>
          </div>
        </div>
      </div>
    );
}

export default SignUp;