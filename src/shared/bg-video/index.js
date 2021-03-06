import React, { Component } from "react";

import "./style.css";

import ReactWOW from "react-wow";
import { Link } from "react-router-dom";

export default class VideoBg extends Component {
  render() {
    let {
      title,
      buttonLabel,
      buttonLink,
      paragraph,
      copyrights,
      animated,
      video
    } = this.props;
    return (
      <div className="video-container">
        <video id="video" width="100%" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        {animated ? (
          <ReactWOW
            animation="zoomIn"
            data-wow-duration="2s"
            data-wow-delay="15s"
          >
            <div className="overlay text-center d-flex justify-content-center align-items-center">
              <div className="overlay-container">
                <h2 className="mb-5">{title}</h2>
                {paragraph && <p className="mb-5"> {paragraph} </p>}
                {buttonLabel && <Link className="vid-btn" to={buttonLink}>{buttonLabel}</Link>}
                {copyrights && <p>{copyrights}</p>}
              </div>
            </div>
          </ReactWOW>
        ) : (
          <div className="overlay text-center d-flex justify-content-center align-items-center">
            <div className="ovarlay-container">
            <h2 className="mb-5">{title}</h2>
              {paragraph && <p className="mb-5"> {paragraph} </p>}
              {buttonLabel && <Link className="vid-btn" to={buttonLink}>{buttonLabel}</Link>}
              {copyrights && <h4>{copyrights}</h4>}
            </div>
          </div>
        )}
      </div>
    );
  }
}
