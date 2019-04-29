import  React, { Component } from 'react';
import * as Constants from '../Timeline/Constants.js';
import axios from 'axios';
class TenantCRUD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            contactNumber: "",
            contactEmail: "",
            qaEmail: "",
            roomReference: "",
            groupName: "",
            startDate: "",
            endDate: "",
            notes: ""
        }
    }
    createTenant = (e) => {
        axios.post(Constants.BASE_URL + Constants.CREATE_TENANT, {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "contactNumber": this.state.contactNumber,
            "contactEmail": this.state.contactEmail,
            "qaEmail": this.state.qaEmail,
            "roomReference": this.state.roomReference,
            "groupName": this.state.groupName,
            "startDate": this.state.startDate,
            "endDate": this.state.endDate,
            "notes": this.state.notes
        }).then(response => {
            console.log(response.data.message);
        });
    }
    deleteAllTenants = (e) => {
        axios.delete(Constants.BASE_URL + Constants.DELETE_TENANT_ALL);
    }
    deleteTenantsByGroup = (e) => {
        axios.delete(Constants.BASE_URL + Constants.DELETE_TENANT_GROUP + this.state.groupName);
    }
    deleteTenant = (e) => {
        axios.delete(Constants.BASE_URL + Constants.DELETE_TENANT, {
            data: {
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "groupName": this.state.groupName
            }
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div>
            <div className="Tenants">
                <h2>Tenants</h2>
                <h3>Add New Tenant</h3>
                <form>
                    <pre>First Name:   <input id="firstName" type="text" name="firstName" onChange={this.onChange}></input></pre>
                    <pre>Last Name:    <input id="lastName" type="text" name="lastName" onChange={this.onChange}></input></pre>
                    <pre>Phone no.:    <input id="contactNumber" type="text" name="contactNumber" onChange={this.onChange}></input></pre>
                    <pre>Contact Email:<input id="contactEmail" type="text" name="contactEmail" onChange={this.onChange}></input></pre>
                    <pre>QA Email:     <input id="qaEmail" type="text" name="qaEmail" onChange={this.onChange}></input></pre>
                    <pre>Group:        <input id="groupName" type="text" name="End Date" onChange={this.onChange}></input></pre>
                    <pre>Apartment No: <input id="roomReference" type="text" name="roomReference" onChange={this.onChange}></input></pre>
                    <pre>Start Date:   <input id="startDate" type="text" name="Start Date" onChange={this.onChange}></input></pre>
                    <pre>End Date:     <input id="endDate" type="text" name="End Date" onChange={this.onChange}></input></pre>
                    <pre>Notes:        <input id="notes" type="text" name="notes" onChange={this.onChange}></input></pre>
                </form>

                <input type='submit' onClick={this.createTenant} value="Add"></input>

                <div className="delete">
                    <h3>Delete a Tenant</h3>
                    <form>
                        <pre>Group: <input id="group" type="text" name="Name" onChange={this.onChange}></input></pre>
                        <pre>First name: <input id="firstName" type="text" name="Name" onChange={this.onChange}></input></pre>
                        <pre>Last name: <input id="lastName" type="text" name="Name" onChange={this.onChange}></input></pre>
                    </form>
                    <input type='submit' value="Delete All" onChange={this.onChange}></input>
                    <input type='submit' value="Delete by Group" onChange={this.onChange}></input>
                    <input type='submit' value="Delete Tenant" onChange={this.onChange}></input>
                </div>
            </div>
            </div>
        );
    }
}
export default TenantCRUD;