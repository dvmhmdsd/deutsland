import React, { Component } from "react";

import Layout from "shared/layout";

import ProjectGallery from "../gallery";
import ProjectFilters from "../filters";

import { getProjects } from "../../services/projects.service";

export default class ProjectsPage extends Component {
  state = {
    projects: null,
    get filteredProjects() {
      return this.projects;
    },
    get activeProject() {
      if (this.filteredProjects) return this.filteredProjects[0];
    },
    isFailed: false,
    isLoading: true
  };

  async componentDidMount() {
    try {
      let { data: projects } = await getProjects();

      this.setState({
        projects,
        filteredProjects: projects,
        activeProject: projects[0],
        isLoading: false
      });
    } catch {
      this.setState({ isLoading: false, isFailed: true });
    }
  }

  filterByType = type => {
    let filteredProjects = this.state.projects.filter(project => {
      return project.type === type;
    });

    this.setState({
      filteredProjects,
      activeProject: filteredProjects[0]
    });
  };

  filterByCountry = country => {
    let filteredProjects = this.state.projects.filter(project => {
      return project.country === country;
    });

    this.setState({
      filteredProjects,
      activeProject: filteredProjects[0]
    });
  };

  activateProject = (index = 0) => {
    this.setState({
      activeProject: this.state.filteredProjects[index]
    });
  };

  render() {
    return (
      <Layout>
        <div className="section">
          <div className="container">
            {this.state.isLoading ? (
              <p className="text-center"> Loading ... </p>
            ) : this.state.isFailed ? (
              <p className="alert alert-danger text-center">
                An error occurred, please try again later or contact support.
              </p>
            ) : (
              <>
                <ProjectFilters
                  filterByType={this.filterByType}
                  filterByCountry={this.filterByCountry}
                />

                {this.state.filteredProjects &&
                this.state.filteredProjects.length > 0 ? (
                  <ProjectGallery
                    activeProject={this.state.activeProject}
                    projects={this.state.filteredProjects}
                    select={this.activateProject}
                  />
                ) : (
                  <p className="text-center mt-5"> No Items ! </p>
                )}
              </>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}
