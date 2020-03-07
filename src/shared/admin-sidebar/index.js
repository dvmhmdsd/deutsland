import React, { Component } from "react";

import "./style.css";

import { Link } from "react-router-dom";

import adminRoutes from "admin-routes.js";

export default class AdminSidebar extends Component {
  state = {
    isAdmin: true
  };

  componentDidMount() {
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));

      this.setState({
        isAdmin: user.type === "admin"
      });
    }
  }

  renderAdminRoutes = () => {
    return adminRoutes.forEach((adRoute, index) => {
      if (adRoute.label && this.state.isAdmin) {
        return (
          <li key={index} className="sidebarItem">
            <Link to={`/admin${adRoute.path}`}> {adRoute.label} </Link>
          </li>
        );
      }
    });
  };

  render() {
    return (
      <aside className="adminSidebar" style={{left: !this.props.visible && "-245px"}}>
        <h1> Admin Dashboard </h1>
        <ul className="list-unstyled mt-2">{this.renderAdminRoutes()}</ul>
      </aside>
    );
  }
}
