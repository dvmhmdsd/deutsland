import React, { Component } from "react";

import isUserLoggedIn from "modules/users/services/auth.service";
import {
  getSolutions,
  deleteSolution,
  addSolution,
  updateSolution
} from "../../services/solutions.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import AdminLayout from "shared/admin-layout";
import AdminTable from "shared/admin-table";
import AddItemModal from "shared/admin-add-modal";

import "./style.css";

export default class SolutionsAdminPage extends Component {
  state = {
    solutionsData: null,
    isLoading: true,
    isFailed: false
  };

  constructor() {
    super();
    this.updateStateWithSolutions = this.updateStateWithSolutions.bind(this);
  }

  tableHeadings = ["title"];

  async componentDidMount() {
    isUserLoggedIn().then(response => {
      if (!response) {
        this.props.history.push("/admin/login");
      }
    });

    this.updateStateWithSolutions();
  }

  async updateStateWithSolutions() {
    try {
      let { data: solutions } = await getSolutions();

      this.setState({
        solutionsData: solutions,
        isLoading: false
      });
    } catch {
      this.setState({ isLoading: false, isFailed: true });
    }
  }

  deleteRecord = id => {
    deleteSolution(id).then(() => {
      this.updateStateWithSolutions();
    });
  };

  updateRecord = (id, data) => {
    return updateSolution(id, data);
  };

  saveSolution = data => {
    return addSolution(data);
  };

  render() {
    let { solutionsData, isLoading, isFailed } = this.state;
    return (
      <AdminLayout>
        <div className="d-flex justify-content-between heading">
          <h2> Solutions </h2>
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
        ) : solutionsData.length > 0 ? (
          <AdminTable
            className="table-striped text-center"
            headers={this.tableHeadings}
            body={solutionsData}
            updateParentState={this.updateStateWithSolutions}
            deleteRecord={this.deleteRecord}
            updateRecord={this.updateRecord}
            acceptsImage={true}
            isEditable={true}
          />
        ) : (
          <p className="text-center">No Items Yet</p>
        )}
        <AddItemModal
          save={this.saveSolution}
          updateParentState={() => this.updateStateWithSolutions()}
          data={solutionsData}
          acceptsImage={true}
        />
      </AdminLayout>
    );
  }
}
