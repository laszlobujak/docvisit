import React, {useState} from 'react'
import axios from 'axios';

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
        if (result.status === 200) {
          console.log(result)
        }
      })
      .catch((error) => console.log(error))

  }


    return (
      <div>
        <Nav></Nav>
        <div id="frame">
          <h1 className="align-text">Sign up</h1>
          <div className="form-container">
            <form onSubmit={postSignup}>
              <div class="form-group">
                <label for="exampleInputEmail1">Full name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  class="form-control"
                  id="fullName"
                  placeholder="Enter your name..."
                ></input>
              </div>
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
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
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

export default SignUp;