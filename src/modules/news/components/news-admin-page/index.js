import React, { Component } from "react";
import AdminLayout from "../../../../shared/admin-layout";

import isUserLoggedIn from "modules/users/services/auth.service";

export default class NewsAdminPage extends Component {
  componentDidMount() {
    isUserLoggedIn().then(response => {
      if (!response) {
        this.props.history.push("/admin/login");
      }
    });
  }

  render() {
    return (
      <>
        <AdminLayout>
          
        </AdminLayout>
      </>
    );
  }
}
