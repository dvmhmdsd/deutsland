import React, { Component } from "react";

import isUserLoggedIn from "modules/users/services/auth.service";
import {
  getUsers,
  deleteUser,
  addUser,
  updateUser
} from "../../services/user.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import AdminLayout from "shared/admin-layout";
import AdminTable from "shared/admin-table";
import AddItemModal from "shared/admin-add-modal";

import "./style.css";

export default class UsersListPage extends Component {
  state = {
    usersData: null,
    isLoading: true
  };

  tableHeadings = ["Title", "Date"];

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
    let news = await getUsers();

    this.setState({
      usersData: news.data,
      isLoading: false
    });
  }

  deleteRecord = id => {
    deleteUser(id).then(() => {
      this.updateStateWithUsers();
    });
  };

  updateRecord = (id, data) => {
    return updateUser(id, data);
  };

  saveUser = data => {
    return addUser(data);
  };

  render() {
    let { usersData, isLoading } = this.state;

    return (
      <>
        <AdminLayout>
          <div className="d-flex justify-content-between heading">
            <h2> Users </h2>
            <button
              data-toggle="modal"
              data-target="#addModal"
              title="Add New Item"
              className="btn btn-success d-block"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          {isLoading ? (
            <p className="text-center"> Loading ... </p>
          ) : usersData.length > 0 ? (
            <AdminTable
              className="table-striped text-center"
              headers={this.tableHeadings}
              body={usersData}
              updateParentState={this.updateStateWithUsers}
              deleteRecord={this.deleteRecord}
              updateRecord={this.updateRecord}
              acceptsImage={false}
            />
          ) : (
            <p className="text-center">No Items Yet</p>
          )}
          <AddItemModal
            save={this.saveUser}
            updateParentState={() => this.updateStateWithUsers()}
            data={usersData}
            acceptsImage={false}
          />
        </AdminLayout>
      </>
    );
  }
}
