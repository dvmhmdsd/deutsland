import React, { Component } from "react";

import "./style.css";
import ReactWOW from "react-wow";

export default class VideoBg extends Component {
  render() {
    let { title, buttonLabel, paragraph, copyrights, animated, video} = this.props;
    return (
      <div className="video-container">
        <video id="video" width="100%" height="100%" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        {animated ? (
          <ReactWOW
            animation="zoomIn"
            data-wow-duration="2s"
            data-wow-delay="15s"
          >
            <div className="overlay text-center d-flex justify-content-center align-items-center">
              <div className="ovarlay-container">
                <h2>{title}</h2>
                {paragraph && <p> {paragraph} </p>}
                {buttonLabel && <button>{buttonLabel}</button>}
                {copyrights && <h4>{copyrights}</h4>}
              </div>
            </div>
          </ReactWOW>
        ) : (
          <div className="overlay text-center d-flex justify-content-center align-items-center">
            <div className="ovarlay-container">
              <h2>{title}</h2>
              {paragraph && <p> {paragraph} </p>}
              {buttonLabel && <button>{buttonLabel}</button>}
              {copyrights && <h4>{copyrights}</h4>}
            </div>
          </div>
        )}
      </div>
    );
  }
}
