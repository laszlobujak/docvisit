import React, { useState } from 'react';
import Calendar from 'react-calendar';

//routing
import {Link} from 'react-router-dom';

//style
import './sbs-form.style.scss';

//important functions
import { show_div_element, hide_div_element, change_class_name } from '../../common-functions';

function SbsForm() {
  const [date, setDate] = useState(new Date());

  //set up appointment
  let onChange = date => setDate(date);


  let secondStep = () => {
    hide_div_element(document.getElementsByClassName("first-block-of-infos")[0]);
    hide_div_element(document.getElementsByClassName("third-block-of-infos")[0]);
    show_div_element(document.getElementsByClassName("second-block-of-infos")[0]);
    change_class_name(document.getElementsByClassName("activ-form-container")[0], "activ-form-container", "activ-form-container-second");
    change_class_name(document.getElementsByClassName("dot")[1], "inactive-dots", "active" );
    document.getElementsByClassName("dot")[0].classList.add("inactive-dots");
  }

  let thirdStep = () => {
    hide_div_element(document.getElementsByClassName("second-block-of-infos")[0]);
    show_div_element(document.getElementsByClassName("third-block-of-infos")[0]);
    change_class_name(document.getElementsByClassName("activ-form-container-second")[0], "activ-form-container-second", "activ-form-container-third");
    change_class_name(document.getElementsByClassName("dot")[2], "inactive-dots", "active")
    document.getElementsByClassName("dot")[1].classList.add("inactive-dots");
  }


  window.onload = () => {
    hide_div_element(document.getElementsByClassName("second-block-of-infos")[0]);
    hide_div_element(document.getElementsByClassName("third-block-of-infos")[0]);
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
        <div className="activ-form-container">
          <div className="first-block-of-infos">
            <h6>Choose a date:</h6>
            <Calendar className="calendar" onChange={onChange} value={date} />
            <button className="btn btn-dark" onClick={secondStep}>
              Next
            </button>
          </div>
          <div className="second-block-of-infos">
            <h6>When:</h6>
            <div id="datetime">
              <button className="grid-date-item">9:00-10:00</button>
              <button className="grid-date-item">10:00-11:00</button>
              <button className="grid-date-item">11:00-12:00</button>
              <button className="grid-date-item">13:00-14:00</button>
              <button className="grid-date-item">14:00-15:00</button>
              <button className="grid-date-item">15:00-16:00</button>
            </div>
            <button className="btn btn-dark" onClick={thirdStep}>
              Next
            </button>
          </div>
          <div className="third-block-of-infos">
              <form>
              <h6>Your symptoms:</h6>
                <div class="form-group">
                <label for="symptoms">Symptoms</label>
                <input type="text" class="form-control" id="symptoms" aria-describedby="symptomsHelp"></input>
                <small id="symptomsHelp" class="form-text text-muted">It isn't required, just optional</small>
                </div>
              </form>
            <Link to="/account"><button className="btn btn-dark" >
              Submit
            </button></Link>
          </div>
          </div>
        </div>
      </div>

  );
}

export default SbsForm;
