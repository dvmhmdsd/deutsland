import React, { Component } from "react";
import VideoBg from "../../../../../../shared/bg-video";
import './style.css';

export default class TrustUs extends Component {
  render() {
    return (
      <div className="trust-us section">
        <VideoBg
          title="Trust Us"
          paragraph="Din is a popular choice on business and tech sites. It's also a good font for creating page titles with impact"
          copyrights="Eng.Amr"
          animated={true}
        />
      </div>
    );
  }
}
