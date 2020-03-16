import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ReactWOW from "react-wow";

export default class BrandItem extends Component {
  render() {
    return (
      <div className="brand-item">
        <h2>{this.props.data.title}</h2>
        <img src={this.props.data.image1} alt="The brand item" />
        <p>{this.props.data.paragraph}</p>
        {this.props.data.items &&
          this.props.data.items.map((item, index) => (
            <ReactWOW
              key={index}
              animation="fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="20s"
            >
              <span>
                <FontAwesomeIcon className="icon" icon={faCheck} />
                {item}
              </span>
            </ReactWOW>
          ))}
      </div>
    );
  }
}
