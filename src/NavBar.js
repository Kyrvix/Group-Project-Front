import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './NavBar.css';
import Admin from './Admin';
import Apartments from './Apartments';
import Groups from './Groups';
import Tenants from './Tenants';
import LandingPage from './LandingPage';
import Buildings from './Buildings';
import LandLords from './Landlords';

class NavBar extends Component {



  render() {
    return (
      <nav>
        <Router>
          <div className="grid-counter">
            <div className="item1">
              <h1> </h1>
            </div>

            <div className="item2">
              <div className="topnav" id="NavBar">
                <ul className="Navbar">
                  <li> <NavLink to="/">Home</NavLink></li>
                  <br></br>
                  <li><NavLink to="/Admin">Admin</NavLink></li>
                  <br></br>
                  <li><NavLink to="/Tenants">Tenants</NavLink></li>
                  <br></br>
                  <li><NavLink to="/Apartments">Apartments</NavLink></li>
                  <br></br>
                  <li><NavLink to="/Buildings">Buildings</NavLink></li>
                  <br></br>
                  <li><NavLink to="/LandLords">Landlords</NavLink></li>
                </ul>
              </div>
            </div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/Admin" component={Admin} />
            <Route path="/Tenants" component={Tenants} />
            <Route path="/Apartments" component={Apartments} />
            <Route path="/Buildings" component={Buildings} />
            <Route path="/Landlords" component={LandLords} />
            
            <div>
            </div>

          </div>
        </Router>
      </nav>
    );
  }
}

export default NavBar;
