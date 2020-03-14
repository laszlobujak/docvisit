import React, { useState } from 'react';

//style
import './statistic.style.scss';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Statistics = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div className="statistic-container">
      <div className="counter-box patient">
        <i className="material-icons">accessibility</i>
        <CountUp end={1200} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall active={!visible}>
              {({ isVisible }) => {
                setVisible(isVisible);
                return <span ref={countUpRef} />;
              }}
            </VisibilitySensor>
          )}
        </CountUp>
        _____________________
        <h5>Patients</h5>
      </div>
      <div className="counter-box">
        <i className="material-icons">people</i>
        <CountUp end={29} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall active={!visible2}>
              {({ isVisible }) => {
                setVisible2(isVisible);
                return <span ref={countUpRef} />;
              }}
            </VisibilitySensor>
          )}
        </CountUp>
        _____________________
        <h5>Doctors</h5>
      </div>
    </div>
  );
};

export default Statistics;
