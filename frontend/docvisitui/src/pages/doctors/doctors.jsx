import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav.component';
import SearchBar from '../../components/searchbar/searchbar.component';
import Card from '../../components/card/card.component';

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
        <Nav />
        <h2>Doctors</h2>
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
