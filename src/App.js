import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App-header">
      <h1>
        <img src={logo} alt="Logo" /> <span></span>
        Apartment Management System
        </h1>
      </div>
      <div className="App">
        <NavBar/>
        
      </div>
      </div>
    );
  }
}

export default App;
