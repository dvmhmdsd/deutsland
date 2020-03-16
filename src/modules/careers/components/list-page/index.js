import React, { Component } from "react";
import CareerItemPage from "../item-page";

import { getCareers } from "./../../services/careers.service";

import "./style.css";

export default class CareersListPage extends Component {
  state = {
    items: null,
    isLoading: true,
    isFailed: false
  };

  componentDidMount() {
    getCareers()
      .then(response => {
        this.setState({ items: response.data, isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, isFailed: true });
      });
  }

  render() {
    let { isLoading, isFailed, items } = this.state;
    return (
      <>
        {isLoading ? (
          <p className="text-center careers-loading"> Loading ... </p>
        ) : isFailed ? (
          <p className="text-center alert alert-danger">
            An error occurred, please try again.
          </p>
        ) : (
          <div className="section">
            <div className="container ">
              <h2 className="text-center">Vacancies</h2>
              <div className="row ">
                {items.map(item => (
                  <div className="col-lg-6 col-sm-12">
                    <CareerItemPage data={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
