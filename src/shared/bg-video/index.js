import React, { Component } from "react";

import video from "../../assets/vid.mp4";

import "./style.css";

export default class VideoBg extends Component {
  render() {
    let { title, buttonLabel, paragraph, copyrights } = this.props;
    return (
      <div className="video-container">
        <video id="video" width="100%" height="100%" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay text-center d-flex justify-content-center align-items-center">
          <div className="ovarlay-container">
            <h2>{title}</h2>
            {paragraph && <p> {paragraph} </p>}
            {buttonLabel && <button>{buttonLabel}</button>}
            {copyrights && <h4>{copyrights}</h4>}

          </div>
        </div>
      </div>
    );
  }
}
