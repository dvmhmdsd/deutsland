import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.css";

import routes from "routes.js";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="Our Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              {routes.map((route, index) => {
                if (route.label) {
                  return (
                    <li key={index} className="nav-item" color="#eaab00">
                      <Link className="nav-link" to={route.path}>
                        {route.label}
                      </Link>
                    </li>
                  );
                } else return ""
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
