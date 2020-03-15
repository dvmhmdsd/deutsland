import React, { Component } from "react";
import BrandItem from "../brand-item";
import image1 from "assets/news/proud .jpg";
export default class BrandList extends Component {
  state = {
    Brands: [
      {
        title: "Our Mission",
        paragraph:
          "To promote a seamless and positive experience with excellence and innovation.",
        image1,
        items: [
          "Honest And Dependable",
          "We Are Creative",
          "We Are Always Improving",
          "Quality Commitment"
        ]
      },
      {
        title: "Our Vission",
        paragraph:
          "To promote a seamless and positive experience with excellence and innovation.",
        image1,
        items: [
          "Honest And Dependable",
          "We Are Creative",
          "We Are Always Improving",
          "Quality Commitment"
        ]
      },
      {
        title: "Our Values",
        paragraph:
          "To promote a seamless and positive experience with excellence and innovation.",
        image1,
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
      <div className="container">
        <div className="row">
          {this.state.Brands &&
            this.state.Brands.map(brand => (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <BrandItem data={brand} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
