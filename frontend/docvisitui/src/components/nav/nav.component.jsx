import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//style
import './nav.style.scss';

//import common functions
import { show_div_element, hide_div_element } from '../../common-functions';

class Nav extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : false
    }
  }

  componentDidMount(){
    sessionStorage.getItem("token") ? this.setState({ isLoggedIn: true }) : this.setState({ isLoggedIn: false })
  }
  

  toggleCallWindow = e => {
    show_div_element(document.getElementsByClassName('for-call')[0]);
    setTimeout(() => {
      hide_div_element(document.getElementsByClassName('for-call')[0]);
    }, 1200);
  };

  toggleChatWindow = e => {
    show_div_element(document.getElementsByClassName('for-chat')[0]);
    setTimeout(() => {
      hide_div_element(document.getElementsByClassName('for-chat')[0]);
    }, 1200);
  };

  logout = () => {
    axios.post('http://localhost:8000/users/logout', {
      ...sessionStorage.getItem('token'),
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then(
        (sessionStorage.removeItem('token'),
          sessionStorage.removeItem('user_id'),
          this.setState({ isLoggedIn : false})
          )
      )
  }

  render(){
      return (
      <nav className="navbar navbar-expand-lg nav-container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i className="material-icons">reorder</i></span>
        </button>
        {
          !this.state.isLoggedIn ?
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup">Sign up</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login">Log in</Link>
                </li>
              </ul>
            </div>
            :
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/account">My page</Link>
                </li>
                <li className="nav-item">
                  <button onClick={this.logout}>Log out</button>
                </li>

              </ul>
            </div>
        }


        <button className="nav-link contact" href="#" onClick={this.toggleCallWindow}>
          Call<i className="material-icons">phone</i>
        </button>
        <button className="nav-link contact" href="#" onClick={this.toggleChatWindow}>
          Chat <i className="material-icons">chat_bubble_outline</i>
        </button>

        <div className="hidden promt-window for-call">
          <h5>Phone number : +3040506000000</h5>
        </div>

        <div className="hidden promt-window for-chat">
          <h5>Skype : doc_visit</h5>

        </div>
      </nav>
    )
  }
  
};

export default Nav;
