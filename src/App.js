import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Pages/Home/Home';
import Orders from './Pages/Orders/Orders';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';

import './App.css';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />




        </Switch>
      </Router>
    </div>
  );
}

export default App;
