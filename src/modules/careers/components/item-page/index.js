import React, { Component } from "react";
import itemImage from "../../../../assets/partners/angus-circle.png";
import "./style.css";

export default class CareerItemPage extends Component {
  render() {
    return (
      <div className="item-page">
        <img src={itemImage} />
        <div className="content">
          <h4>{this.props.data.title}</h4>
          <p>{this.props.data.body}</p>
          <button>Apply Now</button>
        </div>
      </div>
    );
  }
}
