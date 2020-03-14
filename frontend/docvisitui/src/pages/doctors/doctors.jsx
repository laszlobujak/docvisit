import React from 'react'
import Nav from '../../components/nav/nav.component'
import SearchBar from '../../components/searchbar/searchbar.component'
import Card from '../../components/card/card.component';

//style
import './doctors.style.scss';

function Doctors(){

    const exampleDoctors = [];

    for(let i = 0; i < 5; ++i){
        exampleDoctors.push(<Card />)
    }


    return (
      <div>
        <div className="top-container"><Nav />
          <h2>Doctors</h2>
        </div>
        <SearchBar />
        <div className="doctor-cards">{exampleDoctors}</div>
      </div>
    );
}

export default Doctors;