import React from 'react';

//routing
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

//style
import './App.css';

//pages
import Homepage from './pages/homepage/homepage';
import LogIn from './pages/log-in/log-in';
import SignUp from './pages/sign-up/sign-up';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={LogIn} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
