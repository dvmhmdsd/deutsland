import React, { Component } from "react";

import "./style.css";

export default class ProjectGallery extends Component {
  render() {
    return (
      <section className="gallery">
        <div className="row">
          <article className="active-project w-100">
            <img
              className="project-image"
              src={this.props.activeProject.image}
            />
            <div className="project-overlay w-100">
              <h2 className="project-title">
                {this.props.activeProject.title}
              </h2>
              <p className="project-description">
                {this.props.activeProject.body}
              </p>
            </div>
          </article>
          <article className="projects-list d-flex flex-wrap">
            {this.props.projects.map((project, index) => (
              <div className="project-image-container">
                <img
                  onClick={() => this.props.select(index)}
                  key={`project${index}`}
                  className="project-image"
                  src={project.image}
                />
              </div>
            ))}
          </article>
        </div>
      </section>
    );
  }
}
