import React, { Component } from "react";

import "./style.css";

import bg from "assets/trust-bg.gif";

import ReactWOW from "react-wow";

export default class TrustUs extends Component {
  render() {
    return (
      <div className="trust-us">
        <section
          className="trust-content"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="overlay text-center d-flex justify-content-center align-items-center">
            <ReactWOW
              animation="zoomIn"
              data-wow-duration="2s"
              data-wow-delay="15s"
            >
              <div className="overlay-container">
                <h2 className="mb-5">Trust us</h2>
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis nihil vero dolore minus eos quidem cupiditate
                  consequatur odio. Dolores animi harum in, a fugiat alias
                  assumenda nulla earum ipsa esse!
                </p>

                <p className="trust-author">Eng Amr</p>
              </div>
            </ReactWOW>
          </div>
        </section>
        {/* <VideoBg
          title="Trust Us"
          paragraph="Din is a popular choice on business and tech sites. It's also a good font for creating page titles with impact"
          copyrights="Eng.Amr"
          animated={true}
          video={video}
        /> */}
      </div>
    );
  }
}
