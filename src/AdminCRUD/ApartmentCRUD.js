import  React, { Component } from 'react';
import * as Constants from '../Timeline/Constants.js';
import axios from 'axios';
class ApartmentCRUD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            building: "",
            title: "",
            roomNumber: "",
            currentState: "",
            landlord: "",
            deleteBuilding: "",
            deleteTitle: ""
        }
    }
    createApartment = (e) => {
        axios.post(Constants.BASE_URL + Constants.CREATE_URL, {
            "building": this.state.building,
            "title": this.state.title,
            "roomNumber": this.state.roomNumber,
            "currentState": this.state.currentState,
            "landlord": this.state.landlord
        }).then(response => {
            console.log(response.data.message);
        });

    }

    deleteApartment = (e) => {
        axios.delete(Constants.BASE_URL + Constants.DELETE_URL 
            + this.state.apartmentBuilding + "/" + this.state.apartmentNumber);
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (

            <div className="Apartments">
                <h2>Apartments</h2>
                <h3>Add New Apartment</h3>
                <form>
                    <pre>Building Name:    <input id="building" type="text" name="Building" onChange={this.onChange}></input></pre>
                    <pre>Apartment No:     <input id="title" type="text" name="Apartment" onChange={this.onChange}></input></pre>
                    <pre>No. of rooms:     <input id="roomNumber" type="number" name="Room Number" onChange={this.onChange}></input></pre>
                    <pre>Current State:    <input id="currentState" type="text" name="Current State" onChange={this.onChange}></input></pre>
                    <pre>Landlord Name:    <input id="landlord" type="text" name="Landlord" onChange={this.onChange}></input></pre>
                </form>
                <input type='submit' onClick={this.createApartment} value="Add"></input>

                <div className="delete">
                    <h3>Delete an Apartment</h3>
                    <form>
                        <pre>Building Name: <input id="deleteBuilding" type="text" name="Building" onChange={this.onChange}></input></pre>
                        <pre>Apartment No:  <input id="deleteTitle" type="text" name="Apartment" onChange={this.onChange}></input></pre>
                    </form>

                    <input type='submit' value="Delete" onClick={this.deleteApartment}></input>
                </div>
            </div>
        );
    }
}
export default ApartmentCRUD;