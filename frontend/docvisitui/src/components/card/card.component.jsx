import React from 'react'

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
    <button className="book-button">Book an appointment</button>
  </div>
);

export default Card;