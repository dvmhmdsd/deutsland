import React, { Component } from "react";

import isUserLoggedIn from "modules/users/services/auth.service";
import {
  getCareers,
  deleteCareer,
  addCareer,
  updateCareer
} from "../../services/careers.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import AdminLayout from "shared/admin-layout";
import AdminTable from "shared/admin-table";
import AddItemModal from "shared/admin-add-modal";

import "./style.css";

export default class CareersAdminPage extends Component {
  state = {
    careersData: null,
    isLoading: true,
    isFailed: false
  };

  constructor() {
    super();
    this.updateStateWithCareers = this.updateStateWithCareers.bind(this);
  }

  tableHeadings = ["title"];

  async componentDidMount() {
    isUserLoggedIn().then(response => {
      if (!response) {
        this.props.history.push("/admin/login");
      }
    });

    this.updateStateWithCareers();
  }

  async updateStateWithCareers() {
    try {
      let { data: careers } = await getCareers();

      this.setState({
        careersData: careers,
        isLoading: false
      });
    } catch {
      this.setState({ isLoading: false, isFailed: true });
    }
  }

  deleteRecord = id => {
    deleteCareer(id).then(() => {
      this.updateStateWithCareers();
    });
  };

  updateRecord = (id, data) => {
    return updateCareer(id, data);
  };

  saveCareer = data => {
    return addCareer(data);
  };

  render() {
    let { careersData, isLoading, isFailed } = this.state;
    return (
      <AdminLayout>
        <div className="d-flex justify-content-between heading">
          <h2> Careers </h2>
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
        ) : careersData.length > 0 ? (
          <AdminTable
            className="table-striped text-center"
            headers={this.tableHeadings}
            body={careersData}
            updateParentState={this.updateStateWithCareers}
            deleteRecord={this.deleteRecord}
            updateRecord={this.updateRecord}
            acceptsImage={false}
            isEditable={true}
          />
        ) : (
          <p className="text-center">No Items Yet</p>
        )}
        <AddItemModal
          save={this.saveCareer}
          updateParentState={() => this.updateStateWithCareers()}
          data={careersData}
          acceptsImage={false}
        />
      </AdminLayout>
    );
  }
}
