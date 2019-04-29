import React, { Component } from 'react';
import './App.css';
import'./Table.css';
import axios from 'axios'
import {
  BASE_URL,
  GET_ALL_TENANTS
} from './Timeline/Constants'

class Tennants extends Component {
  constructor(props){
    super(props);
    this.state ={
      rowNumber:0
    }
   
  }

  displayAll = (e) => {
    axios.get(BASE_URL + GET_ALL_TENANTS).then(response => {
      console.log(response.data);
      this.setState({
        rowNumber:response.data.length,
        data: response.data
      });
      this.addRow(response.data);
    });
  }
  createRow(data) {
    return (
      <tr>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.contactNumber}</td>
        <td>{data.contactEmail}</td>
        <td>{data.qaEmail}</td>
        <td>{data.roomReference}</td>
        <td>{data.groupName}</td>
        <td>{data.startDate}</td>
        <td>{data.endDate}</td>
        <td>{data.notes}</td>
      </tr>

    );
  }
  addRow(data) {
    let rows = [];
    for (let i = 0; i < this.state.rowNumber; i++) {
      rows.push(this.createRow(data[i]));
    }
    return <tbody>{rows}</tbody>;
  }

  render() {
    return (

      <div className="DisplayTenantsTable">
        <div className="searchBar">
          <button onClick={this.displayAll}>Show All</button>
          </div>
        <table id="table">
           <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone No.</th>
              <th>Contact e-mail</th>
              <th>QA e-mail</th>
              <th>Flat Number</th>
              <th>Group/Intake</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Notes</th>
            </tr>
           </thead> 
          {this.addRow(this.state.data)}
        </table>
      </div>
    );
  }
}

export default Tennants;
