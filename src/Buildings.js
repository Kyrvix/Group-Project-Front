import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BASE_URL,
  GET_ALL_BUILDINGS
} from './Timeline/Constants'

class Buildings extends Component {
  constructor(props){
    super(props);
    this.state ={
      rowNumber:0,
      buildingName: "",
      address: "",
      ownerName: ""
    }
  }

  displayAll = (e) => {
    axios.get(BASE_URL + GET_ALL_BUILDINGS).then(response => {
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
        <td>{data.buildingName}</td>
        <td>{data.address}</td>
        <td>{data.ownerName}</td>
        <td>{data.ownerNumber}</td>
        <td>{data.ownerEmail}</td>
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

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
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
              <th>Building Name</th>
              <th>Address</th>
              <th>Owner Name</th>
              <th>Owner Phone</th>
              <th>Owner e-mail</th>
            </tr>
            </thead>
          {this.addRow(this.state.data)}
        </table>
      </div>
    );
  
  }
}

export default Buildings;
