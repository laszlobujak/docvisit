import React from 'react';
import {Link} from 'react-router-dom';

//style 
import './card.style.scss';

const Card = () => (
  <div className="card-container">
    <div>
      <div className="colored-header"></div>
      <div className="cross"></div>
      <div className="avatar"></div>
      <h4>Dr. Rodrigez</h4>
    </div>
    <button className="book-button">
      <Link to="/calendar">Book an appointment</Link>
    </button>
  </div>
);

export default Card;