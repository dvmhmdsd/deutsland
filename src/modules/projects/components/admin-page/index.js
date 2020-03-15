import React, { Component } from "react";

import isUserLoggedIn from "modules/users/services/auth.service";
import {
  getProjects,
  deleteProject,
  addProject,
  updateProject
} from "../../services/projects.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import AdminLayout from "shared/admin-layout";
import AdminTable from "shared/admin-table";
import AddItemModal from "shared/admin-add-modal";

import "./style.css";

export default class ProjectsAdminPage extends Component {
  state = {
    projectsData: null,
    isLoading: true,
    isFailed: false
  };

  constructor() {
    super();
    this.updateStateWithProjects = this.updateStateWithProjects.bind(this);
  }

  tableHeadings = ["title", "type", "country"];

  async componentDidMount() {
    isUserLoggedIn().then(response => {
      if (!response) {
        this.props.history.push("/admin/login");
      }
    });

    this.updateStateWithProjects();
  }

  async updateStateWithProjects() {
    try {
      let { data: projects } = await getProjects();

      this.setState({
        projectsData: projects,
        isLoading: false
      });
    } catch {
      this.setState({ isLoading: false, isFailed: true });
    }
  }

  deleteRecord = id => {
    deleteProject(id).then(() => {
      this.updateStateWithProjects();
    });
  };

  updateRecord = (id, data) => {
    return updateProject(id, data);
  };

  saveProject = data => {
    return addProject(data);
  };

  render() {
    let { projectsData, isLoading, isFailed } = this.state;
    return (
      <AdminLayout>
        <div className="d-flex justify-content-between heading">
          <h2> Projects </h2>
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
        ) : projectsData.length > 0 ? (
          <AdminTable
            className="table-striped text-center"
            headers={this.tableHeadings}
            body={projectsData}
            updateParentState={this.updateStateWithProjects}
            deleteRecord={this.deleteRecord}
            updateRecord={this.updateRecord}
            acceptsImage={true}
            isEditable={true}
            isProjectTable={true}
          />
        ) : (
          <p className="text-center">No Items Yet</p>
        )}
        <AddItemModal
          save={this.saveProject}
          updateParentState={() => this.updateStateWithProjects()}
          data={projectsData}
          acceptsImage={true}
          isProject={true}
        />
      </AdminLayout>
    );
  }
}
