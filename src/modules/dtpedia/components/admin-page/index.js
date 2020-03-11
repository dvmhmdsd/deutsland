import React, { Component } from "react";

import isUserLoggedIn from "modules/users/services/auth.service";
import {
  getDtpedia,
  deleteDtpedia,
  addDtpedia,
  updateDtpedia
} from "../../services/dtpedia.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import AdminLayout from "shared/admin-layout";
import AdminTable from "shared/admin-table";
import AddItemModal from "shared/admin-add-modal";

import "./style.css";

export default class NewsAdminPage extends Component {
  state = {
    dtpediaData: null,
    isLoading: true
  };

  tableHeadings = ["title", "date"];

  constructor() {
    super();
    this.updateStateWithDtpedia = this.updateStateWithDtpedia.bind(this);
  }

  async componentDidMount() {
    isUserLoggedIn().then(response => {
      if (!response) {
        this.props.history.push("/admin/login");
      }
    });

    this.updateStateWithDtpedia();
  }

  async updateStateWithDtpedia() {
    let dtpedia = await getDtpedia();

    this.setState({
      dtpediaData: dtpedia.data,
      isLoading: false
    });
  }

  deleteRecord = id => {
    deleteDtpedia(id).then(() => {
      this.updateStateWithDtpedia();
    });
  };

  updateRecord = (id, data) => {
    return updateDtpedia(id, data);
  };

  saveDtpedia = data => {
    return addDtpedia(data);
  };

  render() {
    let { dtpediaData, isLoading } = this.state;

    return (
      <>
        <AdminLayout>
          <div className="d-flex justify-content-between heading">
            <h2> Dtpedia </h2>
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
          ) : dtpediaData.length > 0 ? (
            <AdminTable
              className="table-striped text-center"
              headers={this.tableHeadings}
              body={dtpediaData}
              updateParentState={this.updateStateWithDtpedia}
              deleteRecord={this.deleteRecord}
              updateRecord={this.updateRecord}
              acceptsImage={true}
              isEditable={true}
            />
          ) : (
            <p className="text-center">No Items Yet</p>
          )}
          <AddItemModal
            save={this.saveDtpedia}
            updateParentState={() => this.updateStateWithDtpedia()}
            data={dtpediaData}
            acceptsImage={true}
          />
        </AdminLayout>
      </>
    );
  }
}
