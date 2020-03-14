import React, { Component } from "react";
import "./style.css";
import VideoBg from "shared/bg-video";

import video from "assets/waterMist.mp4";

import {Link} from "react-router-dom";

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
<<<<<<< HEAD
        <VideoBg title="Water Mist" buttonLabel="Read More" buttonLink="/water-mist"  />
=======
        <VideoBg title="Water Mist" buttonLabel="Read More" video={video}  />
>>>>>>> 30fafa390e40100e65ee8f82509f1244506157c8
        <div className="dtpedia">
          <div className="container">
            <p>
              Get a free quote now or ask us a question, it's free, simple and
              fast. We will be happy to answer you
            </p>
            <Link className="dtpedia-link btn btn-sm-block" to="/dtpedia">DTpedia</Link>
          </div>
        </div>
      </div>
    );
  }
}
