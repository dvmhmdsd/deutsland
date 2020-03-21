import React, { Component } from "react";
import "./style.css";

import map from "assets/map.gif";

import ReactWOW from "react-wow";

export default class Distribution extends Component {
  render() {
    return (
      <section className="distribution section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="content">
                <h3>Avenir Font</h3>
                <p>
                  Topic sentences are similar to mini thesis statements. Like a
                  thesis statement, a topic sentence has a specific main point.
                  Whereas the thesis is the main point of the essay, the topic
                  sentence is the main point of the paragraph. Like the thesis
                  statement, a topic sentence has a unifying function. But a
                  thesis statement or topic sentence alone doesn’t guarantee
                  unity. An essay is unified if all the paragraphs relate to the
                  thesis, whereas a paragraph is unified if all the sentences
                  relate to the topic sentence. Note: Not all paragraphs need
                  topic sentences. In particular, opening and closing
                  paragraphs, which serve different functions from body
                  paragraphs, generally don’t have topic sentences.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <ReactWOW
                animation="zoomIn"
                data-wow-duration="2s"
                data-wow-delay="10s"
              >
                <div className="map">
                  <img src={map} alt="map" />
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
