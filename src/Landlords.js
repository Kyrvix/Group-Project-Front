import React, { Component } from 'react';
import './App.css';
import './Table.css';
import axios from 'axios';
import {
  BASE_URL,
  GET_ALL_LANDLORDS
} from './Timeline/Constants'

class LandLords extends Component {
constructor(props){
    super(props);
    this.state ={
      rowNumber:0
    }
    
  }

    displayAll = (e) => {
    axios.get(BASE_URL + GET_ALL_LANDLORDS).then(response => {
      console.log(response.data);
      this.setState({
      rowNumber:response.data.length,
      data: response.data
    });
    this.addRow(response.data);
    });
  }


  createRow(data) {
    console.log(data);
    return (
      <tr>
        <td>{data.firstName}</td>
        <td>{data.lastname}</td>
        <td>{data.email}</td>
        <td>{data.phoneNumber}</td>
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

      <div className="DisplayTable">
        <div className="searchBar">
        <button onClick={this.displayAll}>Show All</button>
        </div>
        <table id="table">
           <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>e-mail</th>
               <th>Phone Number</th>
            </tr>
            </thead>
          {this.addRow(this.state.data)}
        </table>
      </div>
    );
  }
}

export default LandLords;
