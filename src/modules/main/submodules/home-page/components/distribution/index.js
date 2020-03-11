import React, { Component } from "react";
import "./style.css";
import map from "../../../../../../assets/map.png";

export default class Distribution extends Component {
  render() {
    return (
      <section className="distribution">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="content">
                <h3>We are worldwide</h3>
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
              <div className="map">
                <img src={map} alt="map" />
                <span className="bransh-style bransh-position1"></span>
                <span className="bransh-style bransh-position2"></span>
                <span className="bransh-style bransh-position3"></span>
                <span className="bransh-style bransh-position4"></span>
                <span className="bransh-style bransh-position5"></span>
                <span className="bransh-style bransh-position6"></span>
                <span className="bransh-style bransh-position7"></span>
                <span className="bransh-style bransh-position8"></span>
                <span className="bransh-style bransh-position9"></span>
                <span className="bransh-style bransh-position10"></span>
                <span className="bransh-style bransh-position11"></span>
                <span className="bransh-style bransh-position12"></span>
                <span className="bransh-style bransh-position13"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
