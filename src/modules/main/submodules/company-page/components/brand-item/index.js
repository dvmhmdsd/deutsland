import React, { Component } from "react";

export default class BrandItem extends Component {
  render() {
    return (
      <>
        <div className="brand-item">
          <h2>{this.props.Brands.title}</h2>
        </div>
      </>
    );
  }
}
