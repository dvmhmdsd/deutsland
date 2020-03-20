import React, { Component } from "react";

import Layout from "shared/layout";

import SolutionGallery from "../gallery";

import { getSolutions } from "../../services/solutions.service";

import Helmet from "react-helmet";

export default class SolutionsPage extends Component {
  state = {
    solutions: null,
    get filteredSolutions() {
      return this.solutions;
    },
    get activeSolution() {
      if (this.filteredSolutions) return this.filteredSolutions[0];
      else return "";
    },
    isFailed: false,
    isLoading: true,
    heading: null
  };

  async componentDidMount() {
    try {
      let { data: solutions } = await getSolutions();

      this.setState({
        solutions,
        filteredSolutions: solutions,
        activeSolution: solutions[0],
        isLoading: false
      });
    } catch {
      this.setState({ isLoading: false, isFailed: true });
    }
  }

  activateSolution = (index = 0) => {
    this.setState({
      activeSolution: this.state.filteredSolutions[index]
    });
  };

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Our solutions | Deutschland</title>
          <meta name="title" content="Our main Solutions" />
          <meta
            name="description"
            content="See more details about our main solutions"
          />
        </Helmet>
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
                <h1 className="mb-5"> Solutions </h1>

                {this.state.filteredSolutions &&
                this.state.filteredSolutions.length > 0 ? (
                  <>
                    {this.state.heading && (
                      <h2> {this.state.heading.toUpperCase()} </h2>
                    )}
                    <SolutionGallery
                      activeSolution={this.state.activeSolution}
                      solutions={this.state.filteredSolutions}
                      select={this.activateSolution}
                    />
                  </>
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
