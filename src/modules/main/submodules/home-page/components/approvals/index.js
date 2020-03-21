import React, { Component } from "react";

import "./style.css";

import approval1 from "assets/approvals/ATEX.png";
import approval2 from "assets/approvals/FM.png";
import approval3 from "assets/approvals/VDS.png";
import approval4 from "assets/approvals/UL.png";
import approval5 from "assets/approvals/SIL2 LOGO.png";
import approval6 from "assets/approvals/NFPA.png";
import approval7 from "assets/approvals/image002.png";

export default class Approvals extends Component {
  state = {
    approvalsImages: [
      approval1,
      approval2,
      approval3,
      approval4,
      approval5,
      approval6,
      approval7
    ]
  };

  renderApprovalsList = () => {
    return this.state.approvalsImages.map((image, index) => (
      <div key={index} className="approval-item mb-4 w-100 col-12 col-sm-6 col-md-4 col-lg-2">
        <img src={image} alt="Approvals logos" />
      </div>
    ));
  };

  render() {
    return (
      <section className="approvals w-100 section text-center">
        <div className="container">
          <div className="row">{this.renderApprovalsList()}</div>
        </div>
      </section>
    );
  }
}
