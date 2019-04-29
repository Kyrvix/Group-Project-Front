import React, { Component } from 'react';
import './App.css';
import './Table.css';
import axios from 'axios';
import {
  GET_ALL_APARTMENTS_URL,
  BASE_URL,
  GET_APART_NUM,
  GET_APART_LANDLORD,
  GET_APART_BUILDING
} from './Timeline/Constants'

class Apartments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowNumber: 0,
      title: "",
      building: "",
      data: ""
    }
    this.searchByNum = this.searchByNum.bind(this);
  }

  displayAll = (e) => {
    axios.get(BASE_URL + GET_ALL_APARTMENTS_URL).then(response => {
      console.log(response.data);
      this.setState({
        rowNumber: response.data.length,
        data: response.data
      });
      this.addRow(response.data);
    });
  }

  searchByNum = (e) => {
    e.preventDefault();
    axios.get(BASE_URL + GET_APART_NUM + this.state.title).then(response => {
      console.log(response.data);
      this.setState({
        rowNumber: response.data.length,
        data: response.data
      });
      this.addRow(response.data);
    });
  }

  searchByBuilding = (e) => {
    e.preventDefault();
    axios.get(BASE_URL + GET_APART_BUILDING + this.state.building).then(response => {
      console.log(response.data);
      this.setState({
        rowNumber: response.data.length,
        data: response.data
      });
      this.addRow(response.data);
    });
  }
  createRow(data) {
    console.log(data);
    return (
      <tr>
        <td>{data.building}</td>
        <td>{data.title}</td>
        <td>{data.roomNumber}</td>
        <td>{data.currentState}</td>
        <td>{data.landlord}</td>

      </tr>

    );
  }
  addRow(data) {
    let rows = [];
    console.log(data);
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
      <div>
        <div className="searchBar">
          <form className="searchCriteria"> <input type="text" id="title" onChange={this.handleChange} placeholder="Flat Number"></input><button onClick={this.searchByNum}>Search</button></form>
          <form className="searchCriteria"> <input type="text" id="building" onChange={this.handleChange} placeholder="Building Name"></input> <button onClick={this.searchByBuilding}>Search</button></form>
          <div className="searchCriteria"> 
          <button onClick={this.displayAll}>Show All</button>
          </div>
        </div>
        <div id="searchContent">
          <div className="DisplayTable">
            <table id="table">
              <thead>
                <tr>
                  <th>Building Name</th>
                  <th>Flat Number</th>
                  <th>No. of Occupants</th>
                  <th>Current State</th>
                  <th>Landlord</th>
                </tr>
              </thead>
              {this.addRow(this.state.data)}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Apartments;
