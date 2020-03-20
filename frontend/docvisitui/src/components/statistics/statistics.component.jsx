import React, { Component } from 'react';

//style
import './statistic.style.scss';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Statistics extends Component {
  constructor() {
    super();

    this.state = {
      active: true,
      active2: true
    };
  }

  render() {
    return (
      <div className="statistic-container">
        <div className="counter-box patient">
          <i className="material-icons">accessibility</i>
          <CountUp end={1200} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor
                onChange={isVisible => {
                  start();
                  this.setState({
                    active: !isVisible
                  });
                }}
                delayedCall
                active={this.state.active}
              >
                {() => <span ref={countUpRef} />}
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
              <VisibilitySensor
                onChange={isVisible => {
                  start();
                  this.setState({
                    active2: !isVisible
                  });
                }}
                delayedCall
                active={this.state.active2}
              >
                {() => <span ref={countUpRef} />}
              </VisibilitySensor>
            )}
          </CountUp>
          _____________________
          <h5>Doctors</h5>
        </div>
      </div>
    );
  }
}

export default Statistics;
