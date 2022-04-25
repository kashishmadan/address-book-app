import React, { Component } from "react";
import AddressBookAppAPIServices from "../service/AddressBookAPIServices";

const service = new AddressBookAppAPIServices();

export default class ViewArea extends Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      Age: "",
      AllUsers: [],
    };
  }

  componentWillMount() {
    this.GetAllUsers();
  }

  GetAllUsers() {
    service
      .GetAllUsers()
      .then((data) => {
        console.log(data);
        this.setState({ AllUsers: data.data.getAllUsersData });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  };

  handleClick = () => {
    if (
      this.state.FirstName === "" ||
      this.state.LastName === "" ||
      this.state.Age === ""
    ) {
      console.log("Input is empty!");
      return;
    }
    console.log("Data: ", this.state);
    const data = {
      firstName: this.state.FirstName,
      lastName: this.state.LastName,
      age: Number(this.state.Age),
    };

    service
      .AddUser(data)
      .then((data) => {
        console.log(data);
        this.GetAllUsers();
      })
      .catch((error) => console.log(error));
  };
  render() {
    let state = this.state;
    return (
      <div>
        <h1>Add User</h1>
        <form>
          <label>
            First Name:
            <input
              type="text"
              name="FirstName"
              value={state.FirstName}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="LastName"
              value={state.LastName}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Age:
            <input
              type="digit"
              name="Age"
              value={state.Age}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit" onClick={this.handleClick}>
            Add
          </button>
        </form>
        <div>
          <h1>All Users</h1>
          <div>
            {this.state.AllUsers.map(function (data, index) {
              return (
                <div>
                  <h3>
                    {data.firstName} | {data.lastName} | {data.age}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
