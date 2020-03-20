import React, { Component } from "react";
import "./style.css";

import bg from "assets/intro-bg.gif";

import { Link } from "react-router-dom";

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <section
          className="intro-content"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh"
          }}
        >
          <div className="overlay text-center d-flex justify-content-center align-items-center">
            <div className="overlay-container">
              <h2 className="mb-5">Water Mist</h2>
              <Link className="vid-btn" to="/water-mist">
                Read More
              </Link>
            </div>
          </div>
        </section>

        <div className="dtpedia">
          <div className="container">
            <p>
              Get a free quote now or ask us a question, it's free, simple and
              fast. We will be happy to answer you
            </p>
            <Link className="dtpedia-link btn btn-sm-block" to="/dtpedia">
              DTpedia
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
