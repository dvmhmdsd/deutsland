import React, { Component } from "react";

import isUserLoggedIn from "modules/users/services/auth.service";
import { getMessages } from "../../services/messages.service";

import AdminLayout from "shared/admin-layout";
import AdminTable from "shared/admin-table";

import "./style.css";

export default class MessagesPage extends Component {
  state = {
    messagesData: null,
    isLoading: true
  };

  tableHeadings = ["name", "email", "phone"];

  constructor() {
    super();
    this.updateStateWithMessages = this.updateStateWithMessages.bind(this);
  }

  async componentDidMount() {
    isUserLoggedIn().then(response => {
      if (!response) {
        this.props.history.push("/admin/login");
      }
    });

    this.updateStateWithMessages();
  }

  async updateStateWithMessages() {
    let messages = await getMessages();

    this.setState({
      messagesData: messages.data,
      isLoading: false
    });
  }

  render() {
    let { messagesData, isLoading } = this.state;

    return (
      <>
        <AdminLayout>
          <div className="heading">
            <h2> Messages </h2>
          </div>

          {isLoading ? (
            <p className="text-center"> Loading ... </p>
          ) : messagesData.length > 0 ? (
            <AdminTable
              className="table-striped text-center"
              headers={this.tableHeadings}
              body={messagesData}
              deleteRecord={this.deleteRecord}
              isEditable={false}
              isDetailed={true}
            />
          ) : (
            <p className="text-center">No Items Yet</p>
          )}
        </AdminLayout>
      </>
    );
  }
}
