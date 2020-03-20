import React, { Component } from "react";

import "./style.css";

export default class solutionGallery extends Component {
  render() {
    return (
      <section className="gallery">
        <div className="row">
          <article className="active-solution w-100 d-flex">
            <div className="solution-overlay w-50 mx-5">
              <h2 className="solution-title mb-4">
                {this.props.activeSolution.title}
              </h2>
              <p className="solution-description">
                {this.props.activeSolution.body}
              </p>
            </div>
            <img
              className="solution-image d-inline-block w-50 ml-1"
              src={this.props.activeSolution.image}
              alt="the active solution"
            />
          </article>
          <article className="solutions-list d-flex">
            {this.props.solutions.map((solution, index) => (
              <div key={`solution${index}`} className="solution-image-container">
                <img
                  onClick={() => this.props.select(index)}
                  className="solution-image mx-1"
                  src={solution.image}
                  alt={`${solution.title}'s thumbnail`}
                  title={`${solution.title}'s title`}
                />
              </div>
            ))}
          </article>
        </div>
      </section>
    );
  }
}
