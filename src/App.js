import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import axiosWithAuth from "./helpers/axiosWithAuth";

function App() {

  const handleClick = (e) => { 
    e.preventDefault()
      axiosWithAuth()
          .post('http://localhost:5000/api/logout')
          .then(res=> {
              localStorage.removeItem("token");
              window.location.href = 'http://localhost:3000/api/login'
          });
  }
  return (
    <Router>

      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a href="#">login</a>
          <a data-testid="logoutButton" href="#" onClick={handleClick}>logout</a>
        </header>
      </div>
      <Switch>
        <PrivateRoute exact path = '/bubblePage' component={BubblePage}/>
        <Route path = '/login' component={Login}/>
        <Route path = '/' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.