import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="btn btn-link text-muted" onClick={this.logout}>
                Logout <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
