import React, { useState } from 'react'
import {Link} from 'react-router-dom';

//style
import './sbs-form.style.scss';


function SbsForm(){

    let secondStep = () =>{
      let to_inactivate = document.getElementById("vertical-line").children[0];
      to_inactivate.classList.remove("active");
      to_inactivate.classList.add("inactive-dots");
      let to_activate = document.getElementById("vertical-line").children[1];
      to_activate.classList.remove("inactive-dots");
      to_activate.classList.add("active");
      let block = document.getElementsByClassName("first-block-of-infos")[0];
      block.classList.add("second-block-of-infos");
      block.classList.remove("first-block-of-infos");

    }

    return (
      <div className="sbs-form-container">
        <div className="form">
            <div id="vertical-line">
              <div className="dot active">1</div>
              <div className="dot inactive-dots">2</div>
              <div className="dot inactive-dots">3</div>
              <div className="dot inactive-dots">4</div>
              <div className="dot inactive-dots">5</div>
            </div>
          <div className="fix-elements first-block-of-infos">
            <h4>If you have a <div className="doctor"></div>, skip this step, otherwise <Link to="/doctors">get started </Link>by visit doctors page!</h4>
            <button className="btn btn-dark" onClick={secondStep}>Next</button>
          </div>

        </div>
      </div>
    );
}

export default SbsForm;