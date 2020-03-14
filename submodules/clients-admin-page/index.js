import React, { Component } from "react";

import isUserLoggedIn from "modules/users/services/auth.service";
import {
  getClients,
  deleteClient,
  addClient
} from "../../services/clients.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import AdminLayout from "shared/admin-layout";
import AdminTable from "shared/admin-table";
import AddItemModal from "shared/admin-add-modal";

import "./style.css";

export default class ClientsAdminPage extends Component {
  state = {
    clientsData: null,
    isLoading: true,
    isFailed: false
  };

  tableHeadings = ["name"];

  constructor() {
    super();
    this.updateStateWithClients = this.updateStateWithClients.bind(this);
  }

  async componentDidMount() {
    isUserLoggedIn().then(response => {
      if (!response) {
        this.props.history.push("/admin/login");
      }
    });

    this.updateStateWithClients();
  }

  async updateStateWithClients() {
    try {
      let { data: clients } = await getClients();

      this.setState({
        clientsData: clients,
        isLoading: false
      });
    } catch {
      this.setState({ isLoading: false, isFailed: true });
    }
  }

  deleteRecord = id => {
    deleteClient(id).then(() => {
      this.updateStateWithClients();
    });
  };

  saveClient = data => {
    return addClient(data);
  };

  render() {
    let { clientsData, isLoading, isFailed } = this.state;

    return (
      <>
        <AdminLayout>
          <div className="d-flex justify-content-between heading">
            <h2> Clients </h2>
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
          ) : isFailed ? (
            <p className="text-center">
              An error occurred, please try again later
            </p>
          ) : clientsData.length > 0 ? (
            <AdminTable
              className="table-striped text-center"
              headers={this.tableHeadings}
              body={clientsData}
              updateParentState={this.updateStateWithClients}
              deleteRecord={this.deleteRecord}
              isEditable={false}
              isDetailed={false}
              isClientTable={true}
            />
          ) : (
            <p className="text-center">No Items Yet</p>
          )}
          <AddItemModal
            save={this.saveClient}
            updateParentState={() => this.updateStateWithClients()}
            data={clientsData}
            acceptsImage={true}
            isClient={true}
          />
        </AdminLayout>
      </>
    );
  }
}
