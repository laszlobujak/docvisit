import React from 'react';

//routing
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {routes} from './routes.config';

//style
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(route => (
            <Route exact key={route.path} path={route.path} component={route.page} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
