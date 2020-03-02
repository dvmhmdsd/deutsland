import React, { Component } from "react";
import "./style.css";
import video from "../../../../../../assets/vid.mp4";

export default class Intro extends Component {
  render() {
    console.log("intro");
    return (
      <div classname="intro">
        <div className="container">
          <video id="video" onclick="play();">
            <source src={video} type="video/mp4" />
          </video>
          <div className="overlay">
            <h2>Water Mist</h2>
            <button>Read More</button>
          </div>
        </div>
        <div className="detpedia">
          <div className="container">
            <p>
              Get a free quote now or ask us a question, it's free, simple and
              fast. We will be happy to answer you
            </p>
            <button>DeTpedia</button>
          </div>
        </div>
      </div>
    );
  }
}
