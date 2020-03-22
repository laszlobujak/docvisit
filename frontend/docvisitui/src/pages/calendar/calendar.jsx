import React from 'react';

//style
import './calendar.style.scss';

//components
import Nav from '../../components/nav/nav.component';
import SbsForm from '../../components/step-by-step-form/sbs-form.component';


function Calendar() {
  return (
    <div> 
      <Nav />
      <div className="calendar-container">
        <div id="left-shape-group" className="dot-group"></div>
        <SbsForm />
        <div id="right-shape-group" className="dot-group"></div>
      </div>
    </div>
  );
}

export default Calendar;
