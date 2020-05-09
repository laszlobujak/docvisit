import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

//components
import Nav from '../../components/nav/nav.component'

//style
import './personal-site.style.scss';


class PersonalSite extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user : ""
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8000/users/me', {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then(res => this.setState({ user : res.data}))
      .catch(error => {
        console.log(error)
      })
  }

  logout = () => {
    axios.post('http://localhost:8000/users/logout', {
      ...sessionStorage.getItem('token'),
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then(
        sessionStorage.removeItem('token')
      )
  }


  render() {
    return (
      <div>
        <Nav />
        <div className="account-layout">
          <div>
            <div id="avatar"></div>
            <Link to="/doctors">
              <div className="bubble my-documents">
                <i className="material-icons">people</i>
              </div>
            </Link>
            <Link to="/calendar">
              <div className="bubble my-calendar">
                <i className="material-icons">calendar_today</i>
              </div>
            </Link>
            <Link to="/calendar">
              <div className="bubble logout" onClick={this.logout}>
                <i className="material-icons">exit_to_app</i>
              </div>
            </Link>
          </div>
          <h2 className="patient-name">{this.state.user && this.state.user.name}</h2>
        </div>
        <div id="account-vector"></div>
      </div>
    )
  }
}

export default PersonalSite;