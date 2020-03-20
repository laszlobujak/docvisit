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
      <div>
        <SbsForm />
      </div>
    </div>
  );
}

export default Calendar;
