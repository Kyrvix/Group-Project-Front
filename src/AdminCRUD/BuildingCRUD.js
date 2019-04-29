import  React, { Component } from 'react';
import * as Constants from '../Timeline/Constants.js';
import axios from 'axios';
class BuildingCRUD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            building: "",
            buildingName: "",
            buildingLocation: "",
            ownerName: "",
            ownerNumber: "",
            ownerEmail: "",
            deleteBuilding: "",
            deleteBuildingLocation: "",
            deleteOwnerName: ""
        }
    }
    createBuilding = (e) => {
        axios.post(Constants.BASE_URL + Constants.CREATE_BUILDING, {
            "buildingName": this.state.buildingName,
            "buildingLocation": this.state.buildingLocation,
            "ownerName": this.state.ownerName,
            "ownerNumber": this.state.ownerNumber,
            "ownerEmail": this.state.ownerEmail

        }).then(response => {
            console.log(response.data.message);
        });

    }
    deleteBuilding = (e) => {
        axios.delete(Constants.BASE_URL + Constants.DELETE_BUILDING, {
                "buildingName": this.state.building,
                "buildingLocation": this.state.buildingLocation,
                "ownerName": this.state.ownerName
        });
    }
    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div className="Building">
                <h2>Building</h2>
                <h3>Add New Building</h3>
                <form>
                    <pre>Building Name:  <input id="buildingName" type="text" name="Building" onChange={this.onChange}></input></pre>
                    <pre>Address:        <input id="buildingLocation" type="text" name="Location" onChange={this.onChange}></input></pre>
                    <pre>Owner Name:     <input id="ownerName" type="text" name="Owner Name" onChange={this.onChange}></input></pre>
                    <pre>Owner Number:   <input id="ownerNumber" type="text" name="Number" onChange={this.onChange}></input></pre>
                    <pre>Owner e-mail:   <input id="ownerEmail" type="text" name="e-mail" onChange={this.onChange}></input></pre>
                </form>
                <br></br>
                <input type='submit' value="Add" onClick={this.createBuilding}></input>

                <div className="delete">
                    <h3>Delete a Building</h3>
                    <form>
                        <pre>Building Name: <input id="deleteBuilding" type="text" name="Building" onChange={this.onChange}></input></pre>
                        <pre>Building Address: <input id="deleteBuildingLocation" type="text" name="Building" onChange={this.onChange}></input></pre>
                        <pre>Owner Name: <input id="deleteOwnerName" type="text" name="Building" onChange={this.onChange}></input></pre>
                    </form>
                    <input type='submit' value="Delete" onClick={this.deleteBuilding}></input>
                </div>
            </div>
        );
    }
}
export default BuildingCRUD;