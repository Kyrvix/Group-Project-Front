import React, { Component } from 'react';
import './Admin.css';
import axios from 'axios';
import './Timeline/Constants';
import ApartmentCRUD from './AdminCRUD/ApartmentCRUD.js';
import BuildingCRUD from './AdminCRUD/BuildingCRUD.js';
import LandlordCRUD from './AdminCRUD/LandlordCRUD.js';
import TenantCRUD from './AdminCRUD/TenantCRUD.js';

class Admin extends Component {
  render() {
    return (
      <div>
        <div>
          <TenantCRUD/>
          <ApartmentCRUD/>
          <BuildingCRUD/>
          <LandlordCRUD/>
        </div>
      </div>
    );
  }
}

export default Admin;
