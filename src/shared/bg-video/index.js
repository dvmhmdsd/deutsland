import React, { Component } from "react";

import video from "../../assets/vid.mp4";

import "./style.css";

export default class VideoBg extends Component {
  render() {
    let { title, buttonLabel, paragraph } = this.props;
    console.log(this.props);
    return (
      <div className="video-container">
        <video id="video" width="100%" height="100%" autoplay muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay text-center d-flex justify-content-center align-items-center">
          <div className="ovarlay-container">
            <h2>{title}</h2>
            {paragraph && <p> {paragraph} </p>}
            {buttonLabel && <button>{buttonLabel}</button>}
          </div>
        </div>
      </div>
    );
  }
}
