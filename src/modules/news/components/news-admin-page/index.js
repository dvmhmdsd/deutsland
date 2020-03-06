import React, { Component } from "react";

import isUserLoggedIn from "modules/users/services/auth.service";
import {
  getNews,
  deleteNews,
  addNews,
  updateNews
} from "../../services/news.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import AdminLayout from "shared/admin-layout";
import AdminTable from "shared/admin-table";
import AddItemModal from "shared/admin-add-modal";

import "./style.css";

export default class NewsAdminPage extends Component {
  state = {
    newsData: null,
    isLoading: true
  };

  tableHeadings = ["Title", "Date"];

  constructor() {
    super();
    this.updateStateWithNews = this.updateStateWithNews.bind(this);
  }

  async componentDidMount() {
    isUserLoggedIn().then(response => {
      if (!response) {
        this.props.history.push("/admin/login");
      }
    });

    this.updateStateWithNews();
  }

  async updateStateWithNews() {
    let news = await getNews();

    this.setState({
      newsData: news.data,
      isLoading: false
    });
  }

  deleteRecord = id => {
    deleteNews(id).then(() => {
      this.updateStateWithNews();
    });
  };

  updateRecord = (id, data) => {
    updateNews(id, data).then(() => {
      this.updateStateWithNews();
    });
  };

  saveNews = data => {
    return addNews(data);
  };

  render() {
    let { newsData, isLoading } = this.state;

    return (
      <>
        <AdminLayout>
          <div className="d-flex justify-content-between heading">
            <h2> News </h2>
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
          ) : newsData.length > 0 ? (
            <AdminTable
              className="table-striped text-center"
              headers={this.tableHeadings}
              body={newsData}
              updateParentState={this.updateStateWithNews}
              deleteRecord={this.deleteRecord}
              updateRecord={this.updateRecord}
            />
          ) : (
            <p className="text-center">No Items Yet</p>
          )}
          <AddItemModal
            save={this.saveNews}
            updateParentState={() => this.updateStateWithNews()}
            data={newsData}
          />
        </AdminLayout>
      </>
    );
  }
}
