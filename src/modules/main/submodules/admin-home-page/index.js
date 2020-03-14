import React, { Component } from "react";

import "./style.css";

import AdminLayout from "shared/admin-layout";

export default class DashboardHome extends Component {
  render() {
    return (
      <AdminLayout>
        <div className="admin-home d-flex justify-content-center align-items-center">
          <p> Welcome to the dashboard ! </p>
        </div>
      </AdminLayout>
    );
  }
}
