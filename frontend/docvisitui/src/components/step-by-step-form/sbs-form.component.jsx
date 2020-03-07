import React from 'react'

//style
import './sbs-form.style.scss';


function SbsForm(){

    var dots = [];
    dots.push(<div className="active dot" key={0}>1</div>);
    for (var i = 1; i < 5; i++) {
      dots.push(<div className="inactive-dots dot" key={i}>{i+1}</div>);
    }

    return (
      <div className="sbs-form-container">
        <h1>
          Easy to use<br></br>....................
        </h1>
        <div className="form">
          <div id="vertical-line">{dots}</div>
          <div className="first-block-of-infos"></div>
        </div>
      </div>
    );
}

export default SbsForm;