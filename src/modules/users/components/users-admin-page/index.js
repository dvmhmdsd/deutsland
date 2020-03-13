import React, { Component } from "react";

import isUserLoggedIn from "modules/users/services/auth.service";
import { getUsers, deleteUser, updateUser } from "../../services/user.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import AdminLayout from "shared/admin-layout";
import AdminTable from "shared/admin-table";

import "./style.css";

export default class UsersListPage extends Component {
  state = {
    usersData: null,
    isLoading: true,
    isFailed: false
  };

  tableHeadings = ["name", "email", "type"];

  constructor() {
    super();
    this.updateStateWithUsers = this.updateStateWithUsers.bind(this);
  }

  async componentDidMount() {
    isUserLoggedIn().then(response => {
      if (!response) {
        this.props.history.push("/admin/login");
      }
    });

    this.updateStateWithUsers();
  }

  async updateStateWithUsers() {
    try {
      let users = await getUsers();

      this.setState({
        usersData: users.data,
        isLoading: false
      });
    } catch {
      this.setState({ isLoading: false, isFailed: true });
    }
  }

  deleteRecord = id => {
    deleteUser(id).then(() => {
      this.updateStateWithUsers();
    });
  };

  updateRecord = (id, data) => {
    return updateUser(id, data);
  };

  render() {
    let { usersData, isLoading, isFailed } = this.state;

    return (
      <>
        <AdminLayout>
          <div className="d-flex justify-content-between heading">
            <h2> Users </h2>
            <Link
              to="/admin/register"
              title="Add New User"
              className="btn btn-success d-block register-btn"
            >
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>
          {isLoading ? (
            <p className="text-center"> Loading ... </p>
          ) : isFailed ? (
            <p className="text-center"> An error occurred, please try again later </p>
          ) : usersData.length > 0 ? (
            <AdminTable
              className="table-striped text-center"
              headers={this.tableHeadings}
              body={usersData}
              updateParentState={this.updateStateWithUsers}
              deleteRecord={this.deleteRecord}
              updateRecord={this.updateRecord}
              acceptsImage={false}
              isUsersTable={true}
              isEditable={true}
            />
          ) : (
            <p className="text-center">No Items Yet</p>
          )}
        </AdminLayout>
      </>
    );
  }
}
