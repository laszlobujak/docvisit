import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Calendar from 'react-calendar';

//components
import Nav from '../../components/nav/nav.component'

//style
import './personal-site.style.scss';


class PersonalSite extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user : "empty",
      appointments : []
    }

    //refs
    this.calendar = React.createRef();
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

    axios.get('http://localhost:8000/appointments', {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then(res => this.setState(prevState => ({
        appointments: [...prevState.appointments, res.data]
      }), () => {
          let appoints = this.state.appointments[0].map( item => item.date)
          let dates = document.getElementsByClassName("react-calendar__month-view__days")[0].childNodes
          dates.forEach(date => 
            appoints.forEach( item => {
              if (date.childNodes[0].textContent === item.substring(8, 10)){
                date.style.backgroundColor = "#4c96f0";
              }
            } )
            )
      }))
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
        (sessionStorage.removeItem('token'),
        sessionStorage.removeItem('user_id'),
        this.setState({ user : ""}))
      )
  }

  
  render() {
    if(this.state.user === ""){
      return <Redirect to={"/"}/>
    }
    return (
      <div>
        <Nav />
        <div className="account-layout">
          <div className="personal-activities">
            <div id="avatar"></div>
            <Link to="/doctors">
              <div className="bubble my-documents">
                <i className="material-icons">people</i>
              </div>
            </Link>
            <Link to="/">
              <div className="bubble logout" onClick={this.logout}>
                <i className="material-icons">exit_to_app</i>
              </div>
            </Link>
          </div>
          <div className="dates-and-infos">
            <div className="letterhead">
              <div id="medic-plus"></div>
            </div>
            <h3>{this.state.user.name}</h3>
            <p>{this.state.user.email}</p>
            <div id="appointments-calendar">
            <h6>Appointments</h6>
              <Calendar 
              className="calendar"
              />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default PersonalSite;