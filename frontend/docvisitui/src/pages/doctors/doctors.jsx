import React from 'react';
import SearchBar from '../../components/searchbar/searchbar.component';
import Card from '../../components/card/card.component';
import {Link} from 'react-router-dom';

//json file
import docInfos from '../../docs.json';

//style
import './doctors.style.scss';

const Doctors = () => {  

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
        {docInfos.doctors.map(doc => (
          <Card key={doc} docName={doc.name}  occ={doc.occupation}/>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
