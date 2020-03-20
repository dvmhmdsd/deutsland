import React, { Component } from "react";

import "./style.css";

export default class ProjectGallery extends Component {
  render() {
    return (
      <section className="gallery">
        <div className="row">
          <article className="active-project w-100 d-flex">
            <div className="project-overlay w-50 ml-1">
              <h2 className="project-title mb-4">
                {this.props.activeProject.title}
              </h2>
              <p className="project-description">
                {this.props.activeProject.body}
              </p>
              <p className="project-location">
                <span>Location: </span>
                {this.props.activeProject.country}
              </p>
            </div>
            <img
              className="project-image d-inline-block w-50 ml-1"
              src={this.props.activeProject.image}
              alt="the active project"
            />
          </article>
          <article className="projects-list d-flex w-100">
            {this.props.projects.map((project, index) => (
              <div key={`project${index}`} className="project-image-container">
                <img
                  onClick={() => this.props.select(index)}
                  className="project-image mx-1"
                  src={project.image}
                  alt={`${project.title}'s thumbnail`}
                  title={`${project.title}'s title`}
                />
              </div>
            ))}
          </article>
        </div>
      </section>
    );
  }
}
