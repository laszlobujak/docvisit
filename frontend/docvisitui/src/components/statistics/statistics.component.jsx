import React, { Component } from 'react'

//style
import './statistic.style.scss';
import { render } from '@testing-library/react';

class Statistics extends Component {
  constructor() {
    super();
    this.state= {   
        "doctor" : 0,
        "patient" : 0

    }
  }

/*     counter_to_target = () => {
      for(let i = 0; i < 1200; ++i){
          setTimeout(() => {
              this.setState({ doctor: i });
              document.getElementById(
                "_count_to_target_patient"
              ).innerHTML = `<p>${this.state.patient}</p>`;
              this.setState({ patient: i });
              document.getElementById(
                "_count_to_target_doctor"
              ).innerHTML = `<p>${this.state.doctor}</p>`;
          },340);
      }
  } */

  render() {

/*     window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        console.log("most")
        this.counter_to_target();
      }
    }); */

    return (
      <div className="statistic-container">
        <div className="counter-box patient">
          <i className="material-icons">accessibility</i>
          <p id="_count_to_target_patient"></p>
          _____________________
          <h5>Patients</h5>
        </div>
        <div className="counter-box">
          <i className="material-icons">people</i>
          <p id="_count_to_target_doctor"></p>
          _____________________
          <h5>Doctors</h5>
        </div>
      </div>
    );
  }
}

export default Statistics;