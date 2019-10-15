import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class DynastyCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      date: new Date(),
      users: ['test user 3', 'test user 4']
    }
  }

  componentDidMount = () => {
    this.setState({
      name: "Dynasty Name",
      user: ['test user', 'test user 2']
    });
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDate = (date) => {
    this.setState({
      date: date
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const dynasty = {
      name: this.state.name,
      date: this.state.date
    }

    console.log(dynasty);

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Dynasty</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <select ref="userInput" required className="form-control" value={this.state.name} onChange={this.onChangeName}>
              {
                this.state.users.map(
                  (user) => {
                    return <option
                      key={user}
                      value={user}>
                      {user}
                    </option>
                  }
                )
              }
            </select>
          </div>
          <div className="form-group">
            <label>Date: </label>
            <DatePicker selected={this.state.date} onChange={this.onChangeDate}></DatePicker>
          </div>
          <div className="form-group">
            <input type="submit" value="Create Dynasty" className="btn btn-primary"></input>
          </div>
        </form>
      </div>
    );
  }
}