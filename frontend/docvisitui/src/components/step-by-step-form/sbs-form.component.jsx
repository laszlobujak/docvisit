import React, {Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

//routing
import {Link, Redirect} from 'react-router-dom';

//style
import './sbs-form.style.scss';

//important functions
import { show_div_element, hide_div_element, change_class_name } from '../../common-functions';


class SbsForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      date : new Date(),
      time : "",
      symptoms : [],
      doctor : localStorage.getItem("name")
    }

    //refs
    this.firstBlockOfInfos = React.createRef();
    this.thirdBlockOfInfos = React.createRef();
    this.secondBlockOfInfos = React.createRef();
    this.symptomsWindow = React.createRef();
    this.activeFormContainer = React.createRef();
  }

  dateChooser = (e) => {
    this.setState({ date: e})
  }

  setTimeforVisit = (e) => {
    this.setState({ time: e.target.textContent })
  }

  giveSymptoms = (e) => {
    this.setState({ symptoms: e.target.value})
  }

  writeOut = (e) => {
    e.preventDefault();
    let text = document.createElement("p");
    text.classList.add("sympton");
    text.innerText = this.state.symptoms;
    this.symptomsWindow.current.appendChild(text)
  }



  secondStep = () => {
    hide_div_element(this.firstBlockOfInfos.current);
    hide_div_element(this.thirdBlockOfInfos.current);
    show_div_element(this.secondBlockOfInfos.current);
    change_class_name(this.activeFormContainer.current, "activ-form-container", "activ-form-container-second");
    change_class_name(document.getElementsByClassName("dot")[1], "inactive-dots", "active" );
    document.getElementsByClassName("dot")[0].classList.add("inactive-dots");
  }

  thirdStep = () => {
    hide_div_element(this.secondBlockOfInfos.current);
    show_div_element(this.thirdBlockOfInfos.current);
    change_class_name(document.getElementsByClassName("activ-form-container-second")[0], "activ-form-container-second", "activ-form-container-third");
    change_class_name(document.getElementsByClassName("dot")[2], "inactive-dots", "active")
    document.getElementsByClassName("dot")[1].classList.add("inactive-dots");
  }

  saveAppointment = () => {
    let date = this.state.date + " " + this.state.time
    axios.post('http://localhost:8000/appointments', {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      },
      description: this.state.symptoms,
      doctor: this.state.doctor,
      patient: sessionStorage.getItem('user_id'),
      date: date

    })
      .then(res => this.setState({ user: res.data }))
      .catch(error => {
        console.log(error)
      })
  }


  render(){
    if (localStorage.getItem("name") === null) {
      return <Redirect to={{
        pathname: '/doctors'
      }}
      />
    }
    return (
      <div className="sbs-form-container">
        <h3>CREATE AN APPOINTMENT</h3>
        <div className="form">
          <div id="vertical-line">
            <div className="dot active">1</div>
            <div className="dot inactive-dots">2</div>
            <div className="dot inactive-dots">3</div>
          </div>
          <div className="activ-form-container" ref={this.activeFormContainer}>
            <div className="first-block-of-infos" ref={this.firstBlockOfInfos}>
              <h6>Choose a date:</h6>
              <Calendar className="calendar" onChange={this.dateChooser}/>
              <button className="btn btn-dark" onClick={this.secondStep}>
                Next
            </button>
            </div>
            <div className="second-block-of-infos hidden" ref={this.secondBlockOfInfos}>
              <h6>When:</h6>
              <div id="datetime">
                <button className="grid-date-item" onClick={this.setTimeforVisit}>9:00-10:00</button>
                <button className="grid-date-item" onClick={this.setTimeforVisit}>10:00-11:00</button>
                <button className="grid-date-item" onClick={this.setTimeforVisit}>11:00-12:00</button>
                <button className="grid-date-item" onClick={this.setTimeforVisit}>13:00-14:00</button>
                <button className="grid-date-item" onClick={this.setTimeforVisit}>14:00-15:00</button>
                <button className="grid-date-item" onClick={this.setTimeforVisit}>15:00-16:00</button>
              </div>
              <button className="btn btn-dark" onClick={this.thirdStep}>
                Next
            </button>
            </div>
            <div className="third-block-of-infos hidden" ref={this.thirdBlockOfInfos}>
              <form>
                <h6>Your symptoms:</h6>
                <div className="form-group">
                  <label htmlFor="symptoms">Symptoms</label>
                  <input type="text" className="form-control" id="symptoms" aria-describedby="symptomsHelp" onChange={this.giveSymptoms}></input>
                  <small id="symptomsHelp" className="form-text text-muted">It isn't required, just optional</small>
                  <button id="write-out" onClick={this.writeOut}>+ Add</button>
                </div>
              </form>
              <div id="symptons-window" ref={this.symptomsWindow}></div>
              <Link to="/account"><button className="btn btn-dark" onClick={this.saveAppointment}>
                Submit
            </button></Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
  
}

export default SbsForm;
