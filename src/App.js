import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Pages/Home/Home';
import Orders from './Pages/Orders/Orders';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import { IsAuth } from './context/AuthContext'

import './App.css';
import Contact from './Pages/Contact/Contact';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const {Auth} = IsAuth()

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />

          <ProtectedRoute path="/orders" component={Orders} isAuth={Auth} />  



        </Switch>
      </Router>
    </div>
  );
}

export default App;
