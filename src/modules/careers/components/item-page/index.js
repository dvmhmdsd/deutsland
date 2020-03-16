import React, { Component } from "react";

import itemImage from "assets/services/greyscale-01.png";

import "./style.css";

import ReactWOW from "react-wow";

export default class CareerItemPage extends Component {
  render() {
    return (
      <ReactWOW animation="rotateIn" data-wow-duration="4s" data-wow-delay="10s">
        <div className="careers-item mb-4">
          <div className="row">
            <div className="careers-item-img col-4">
              <img src={itemImage} />
            </div>
            <div className="careers-content col-8 mt-4">
              <h4>{this.props.data.title}</h4>
              <p>{this.props.data.body}</p>
            </div>
          </div>
        </div>
      </ReactWOW>
    );
  }
}
