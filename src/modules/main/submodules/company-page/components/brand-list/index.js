import React, { Component } from "react";
import BrandItem from 'brand-item';
export default class BrandList extends Component {
  state = {
    Brands: [
      {
        title: "our Mission",
        paragraph:
          "To promote a seamless and positive experience with excellence and innovation.",
        items: [
          "Honest And Dependable",
          "We Are Creative",
          "We Are Always Improving",
          "Quality Commitment"
        ]
      },
      {
        title: "our Mission",
        paragraph:
          "To promote a seamless and positive experience with excellence and innovation.",
        items: [
          "Honest And Dependable",
          "We Are Creative",
          "We Are Always Improving",
          "Quality Commitment"
        ]
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.Brands && this.state.map(brand => (
          <BrandItem/>
        ))}
      </div>
    );
  }
}
