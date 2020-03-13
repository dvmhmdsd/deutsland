import React, { Component } from "react";

import AdminLayout from "shared/admin-layout";
import isUserLoggedIn from "modules/users/services/auth.service";

import { addUser } from "../../services/user.service";

import "./style.css";

export default class RegisterPage extends Component {
  state = {
    name: "",
    type: "",
    password: "",
    email: "",
    isSubmitting: false,
    success: false,
    errMsg: null
  };

  async componentDidMount() {
    isUserLoggedIn().then(response => {
      if (!response) {
        this.props.history.push("/admin/login");
      }
    });
  }

  saveUser = e => {
    e.preventDefault();

    let { name, type, email, password } = this.state;

    this.setState({ isSubmitting: true });

    addUser({ name, type, email, password })
      .then(res => {
        if (res.status === 400) {
          this.setState({ isSubmitting: false, errMsg: res.data.message });
          return;
        }
        this.setState({ isSubmitting: false, success: true });

        setTimeout(() => this.setState({ success: false }), 2000);
      })
      .catch(err => {
        if (err.response.status === 500) {
          this.setState({
            isSubmitting: false,
            errMsg:
              "An error occurred, please try again later, or contact support."
          });
          setTimeout(() => this.setState({ errMsg: null }), 2000);
        } else if (err.response.status === 400) {
          this.setState({
            isSubmitting: false,
            errMsg: "User already exists."
          });
          setTimeout(() => this.setState({ errMsg: null }), 2000);
        }
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <AdminLayout>
        <div className="heading">
          <h2> Add new user </h2>
        </div>

        {this.state.success ? (
          <div className="d-flex justify-content-center">
            <p className="text-center alert alert-success w-50">Item Saved Successfully</p>
          </div>
        ) : this.state.errMsg ? (
          <div className="d-flex justify-content-center">
            <p className="text-center alert alert-danger w-50">
              {this.state.errMsg}
            </p>
          </div>
        ) : (
          <form className="register-form" onSubmit={this.saveUser}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Name of the user"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email of the user"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter a good password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="type">Type</label>
                <select
                  name="type"
                  className="form-control"
                  value={this.state.type}
                  onChange={this.handleChange}
                >
                  <option>Choose a type</option>
                  <option value="admin">Admin</option>
                  <option value="data entry">Data Entry</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              {this.state.isSubmitting ? "Submitting ..." : "Save"}
            </button>
          </form>
        )}
      </AdminLayout>
    );
  }
}
