import React from 'react'
import {Link} from 'react-router-dom';

//components
import Nav from '../../components/nav/nav.component'

//style
import './personal-site.style.scss';

function PersonalSite(){
    return (
      <div>
        <Nav />
        <div className="account-layout">
          <div>
            <div id="avatar"></div>
            <Link>
              <div className="bubble visit-doctors-page">
                <i class="material-icons">assignment</i>
              </div>
            </Link>
            <Link to="/doctors">
              <div className="bubble my-documents">
                <i class="material-icons">people</i>
              </div>
            </Link>
            <Link>
              <div className="bubble my-calendar">
                <i class="material-icons">calendar_today</i>
              </div>
            </Link>
          </div>
          <h2 className="patient-name">Name example</h2>
        </div>
      </div>
    );
}

export default PersonalSite;