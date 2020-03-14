import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.css";

import routes from "routes.js";
import SocialMedia from "../social";

export default class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 300) {
        this.headerElement.classList.add("navbar--scrolled")
      } else  {
        this.headerElement.classList.remove("navbar--scrolled")
      }
    })
  }
  render() {
    return (
      <nav ref={el => this.headerElement = el} className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="Our Logo" />
          </NavLink>
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
                    <li key={index} className="nav-item">
                      <NavLink className="nav-link" to={route.path} exact>
                        {route.label}
                      </NavLink>
                    </li>
                  );
                } else return ""
              })}
            </ul>

            <SocialMedia />
          </div>
        </div>
      </nav>
    );
  }
}
