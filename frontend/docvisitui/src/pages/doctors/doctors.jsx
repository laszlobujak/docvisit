import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/searchbar/searchbar.component';
import Card from '../../components/card/card.component';
import {Link} from 'react-router-dom';

//style
import './doctors.style.scss';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const doctors = await response.json();
      const names = doctors.map(doc => doc.name);
      setDoctors(names);
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <div className="top-container">
        <h2>Doctors</h2>
        <div className="doctors-navigation-bar">
          <div className="go-to-mainpage"><Link to='/'><span class="material-icons">home</span></Link></div>
          <div className="go-to-mainpage"><Link to='/account'><span class="material-icons">account_circle</span></Link></div>
        </div>
      </div>
      <SearchBar />
      <div className="doctor-cards">
        {doctors.map(doc => (
          <Card key={doc} docName={doc} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
