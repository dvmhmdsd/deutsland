import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

import logout from "modules/users/services/logout.service";

export default class AdminHeader extends Component {
  state = {
    redirect: null
  };
  logout = () => {
    logout()
      .then(() => {
        this.setState({ redirect: "/admin/login" });
      })
      .then(() => {
        window.location.href = "/admin/login";
      });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <button
          className="btn text-muted nav-item d-md-none"
          style={{marginLeft: this.props.visible && "245px"}}
          onClick={this.props.toggleSidebar}
        >
          <FontAwesomeIcon
            size="lg"
            icon={this.props.visible ? faTimes : faBars}
          />
        </button>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn btn-link text-muted" onClick={this.logout}>
              Logout <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
