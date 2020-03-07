import React, { Component } from "react";
import "./style.css";
import VideoBg from "../../../../../../shared/bg-video";

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <VideoBg title="Water mist" buttonLabel="Read More"  />
        <div className="detpedia">
          <div className="container">
            <p>
              Get a free quote now or ask us a question, it's free, simple and
              fast. We will be happy to answer you
            </p>
            <button>DTpedia</button>
          </div>
        </div>
      </div>
    );
  }
}
