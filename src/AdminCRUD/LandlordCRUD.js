import  React, { Component } from 'react';
import * as Constants from '../Timeline/Constants.js';
import axios from 'axios';
class LandlordCRUD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            landlordFirstName: "",
            landlordLastName: "",
            landlordEmail: "",
            landlordPhoneNumber: ""
        }
    }
    createLandlord = (e) => {
        axios.post(Constants.BASE_URL + Constants.CREATE_LANDLORD, {
            "firstName": this.state.landlordFirstName,
            "lastName": this.state.landlordLastName,
            "email": this.state.landlordEmail,
            "phoneNumber": this.state.landlordPhoneNumber
        }).then(response => {
            console.log(response.data.message);
        });

    }

    deleteLandlord = (e) => {
        axios.delete(Constants.BASE_URL + Constants.DELETE_LANDLORD, {
            data: {
                "firstName": this.state.landlordFirstName,
                "lastName": this.state.landlordLastName,
                "email": this.state.landlordEmail,
                "phoneNumber": this.state.landlordPhoneNumber
            }
        }).then(response => {
            console.log(response.data.message);
        });

    }
    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
                <div className="Landlords">
          <h2>Landlords</h2>
          <h3>Add New Landlord</h3>
          <form>
            <pre>First Name:     <input id="firstName" type="text" name="Name" onChange={this.setLandlordFirstName}></input></pre>
            <pre>Last Name:      <input id="lastName" type="text" name="Name" onChange={this.setLandlordLastName}></input></pre>
            <pre>Email Address:  <input id="email" type="text" name="No of Occupants" onChange={this.setLandlordEmail}></input></pre>
            <pre>Phone No:       <input id="phoneNo" type="text" name="Phone" onChange={this.setLandlordPhoneNumber}></input></pre>
          </form>
          <input type='submit' value="Add" onClick={this.createLandlord}></input>

          <div className="delete">
            <h3>Delete a Landlord</h3>
            <form>
              <pre>First Name:     <input id="firstName" type="text" name="Name" onChange={this.setLandlordFirstName}></input></pre>
              <pre>Last Name:      <input id="lastName" type="text" name="Name" onChange={this.setLandlordLastName}></input></pre>
              <pre>Email Address:  <input id="email" type="text" name="No of Occupants" onChange={this.setLandlordEmail}></input></pre>
              <pre>Phone No:       <input id="phoneNo" type="text" name="Phone" onChange={this.setLandlordPhoneNumber}></input></pre>
            </form>

            <input type='submit' value="Delete" onClick={this.deleteLandlord}></input>
          </div>
          </div>
        );
    }
}
export default LandlordCRUD;