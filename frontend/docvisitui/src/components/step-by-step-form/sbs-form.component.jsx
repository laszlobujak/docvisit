import React, { useState } from 'react'
import Calendar from "react-calendar";
import {show_div_element, hide_div_element} from '../../common-functions';

//style
import './sbs-form.style.scss';


function SbsForm(){

  const [date, setDate] = useState(new Date());

  let onChange = date => setDate(date);

    let secondStep = () =>{
      let to_inactivate = document.getElementById("vertical-line").children[0];
      to_inactivate.classList.remove("active");
      to_inactivate.classList.add("inactive-dots");
      let to_activate = document.getElementById("vertical-line").children[1];
      to_activate.classList.remove("inactive-dots");
      to_activate.classList.add("active");
      let block = document.getElementsByClassName("first-block-of-infos")[0];
      hide_div_element(block);

    }

    let thirdStep = () => {
      let to_inactivate = document.getElementById("vertical-line").children[0];
      to_inactivate.classList.remove("active");
      to_inactivate.classList.add("inactive-dots");
      let to_activate = document.getElementById("vertical-line").children[1];
      to_activate.classList.remove("inactive-dots");
      to_activate.classList.add("active");
      let block = document.getElementsByClassName("first-block-of-infos")[0];
      block.innerHTML = "";
    };

    return (
      <div className="sbs-form-container">
        <div className="form">
          <div id="vertical-line">
            <div className="dot active">1</div>
            <div className="dot inactive-dots">2</div>
            <div className="dot inactive-dots">3</div>
          </div>
          <div className="fix-elements first-block-of-infos">
            <h6>First, choose a date for your appointment</h6>
            <Calendar className="calendar" onChange={onChange} value={date} />
            <button className="btn btn-dark" onClick={secondStep}>
              Next
            </button>
          </div>
          <div className="second-block-of-infos">
            <div id="datetime"></div>
            <button className="btn btn-dark" onClick={thirdStep}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
}

export default SbsForm;