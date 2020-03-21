import React, { useState } from 'react';
import Calendar from 'react-calendar';

//routing
import {Link} from 'react-router-dom';

//style
import './sbs-form.style.scss';

//important functions
import { show_div_element, hide_div_element } from '../../common-functions';

function SbsForm() {
  const [date, setDate] = useState(new Date());

  let onChange = date => setDate(date);

  let secondStep = () => {
    hide_div_element(document.getElementsByClassName("first-block-of-infos")[0])
    hide_div_element(document.getElementsByClassName("third-block-of-infos")[0])
    show_div_element(document.getElementsByClassName("second-block-of-infos")[0])
    document.getElementsByClassName("dot")[0].classList.add("inactive-dots");
    document.getElementsByClassName("dot")[1].classList.remove("inactive-dots");
    document.getElementsByClassName("dot")[1].classList.add("active");
  }

  let thirdStep = () => {
    hide_div_element(document.getElementsByClassName("second-block-of-infos")[0])
    hide_div_element(document.getElementsByClassName("first-block-of-infos")[0])
    show_div_element(document.getElementsByClassName("third-block-of-infos")[0])
    document.getElementsByClassName("dot")[1].classList.add("inactive-dots");
    document.getElementsByClassName("dot")[2].classList.remove("inactive-dots");
    document.getElementsByClassName("dot")[2].classList.add("active");
  }


  window.onload = () => {
    show_div_element(document.getElementsByClassName("first-block-of-infos")[0])
    hide_div_element(document.getElementsByClassName("second-block-of-infos")[0])
    hide_div_element(document.getElementsByClassName("third-block-of-infos")[0])
  }


  return (
    <div className="sbs-form-container">
      <div className="form">
        <div id="vertical-line">
          <div className="dot active">1</div>
          <div className="dot inactive-dots">2</div>
          <div className="dot inactive-dots">3</div>
        </div>
        <div className="first-block-of-infos">
          <h6>First, choose a date for your appointment</h6>
          <Calendar className="calendar" onChange={onChange} value={date} />
          <button className="btn btn-dark" onClick={secondStep}>
            Next
          </button>
        </div>
        <div className="second-block-of-infos">
          <h6>Want to arrive at:</h6>
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
          <div id="doctors-to-choose">
            <label htmlFor="symptoms">Type here your symptoms</label>
            <input type="text" name="symptoms" id="symptoms" value="symptoms" placeholder="type here"></input>
          </div>
          <Link to="/account"><button className="btn btn-dark">
            Submit
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default SbsForm;
