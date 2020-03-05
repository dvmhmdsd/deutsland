import React, { Component } from "react";
import AdminHeader from "../admin-header";
import AdminSidebar from "../admin-sidebar";

import "./style.css";

export default class AdminLayout extends Component {
  render() {
    return (
      <>
        <AdminHeader />
        <main>{this.props.children}</main>
        <AdminSidebar />
      </>
    );
  }
}
