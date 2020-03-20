import React, { Component } from "react";

import types from "globals/project-types";
import countries from "globals/countries";

import "./style.css";

export default class ProjectFilters extends Component {
  state = {
    activeTab: null
  };

  handleChange = e => {
    this.props.filterByCountry(e.target.value);
    this.setState({
      activeTab: null
    });
  };

  handleClick = (index, type) => {
    this.setState({
      activeTab: index
    });

    this.props.filterByType(type);
  };

  render() {
    return (
      <section className="row filters">
        <ul className="list-unstyled col-8 type-filters">
          {types.map((type, index) => (
            <li
              className={`d-inline-block ${
                this.state.activeTab === index ? "active" : ""
              }`}
              key={`type${index}`}
              onClick={() => this.handleClick(index, type)}
            >
              {type}
            </li>
          ))}
        </ul>

        <div className="col-4 mt-3">
          <select onChange={this.handleChange} defaultValue="" className="form-control">
            <option value="" disabled>
              Choose a country
            </option>

            {countries.map((country, index) => (
              <option key={`country${index}`} value={country}>
                {country.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </section>
    );
  }
}
