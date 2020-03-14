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
    isLoading: true,
    isFailed: false
  };

  tableHeadings = ["title", "date"];

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
    try {
      let news = await getNews();

      this.setState({
        newsData: news.data,
        isLoading: false
      });
    } catch {
      this.setState({ isLoading: false, isFailed: true });
    }
  }

  deleteRecord = id => {
    deleteNews(id).then(() => {
      this.updateStateWithNews();
    });
  };

  updateRecord = (id, data) => {
    return updateNews(id, data);
  };

  saveNews = data => {
    return addNews(data);
  };

  render() {
    let { newsData, isLoading, isFailed } = this.state;

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
          ) : isFailed ? (
            <p className="text-center">
              An error occurred, please try again later
            </p>
          ) : newsData.length > 0 ? (
            <AdminTable
              className="table-striped text-center"
              headers={this.tableHeadings}
              body={newsData}
              updateParentState={this.updateStateWithNews}
              deleteRecord={this.deleteRecord}
              updateRecord={this.updateRecord}
              acceptsImage={true}
              isEditable={true}
            />
          ) : (
            <p className="text-center">No Items Yet</p>
          )}
          <AddItemModal
            save={this.saveNews}
            updateParentState={() => this.updateStateWithNews()}
            data={newsData}
            acceptsImage={true}
          />
        </AdminLayout>
      </>
    );
  }
}
