import React from 'react';
import { Link } from 'react-router-dom';

//style
import './card.style.scss';

const Card = ({ docName, occ }) => (
  <div className="card-container">
    <div>
      <div className="colored-header"><h5>{occ}</h5></div>
      <div className="cross"></div>
      <div className="avatar"></div>
      <h4>{docName}</h4>
    </div>
    <Link to="/calendar"><button className="book-button" onClick={() => localStorage.setItem("name", docName)}>Book an appointment</button></Link>
  </div>
);

export default Card;
