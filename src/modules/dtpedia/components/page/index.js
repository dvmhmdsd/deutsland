import React, { Component } from "react";

import Layout from "shared/layout";

import "./style.css";
import { getSingleDtpedia, getDtpedia } from "../../services/dtpedia.service";

import { NavLink } from "react-router-dom";

export default class DtPediaPage extends Component {
  state = {
    dtpediaItem: null,
    dtpediaList: null,
    isLoading: false
  };

  componentDidMount() {
    this.getData();
  }

  getData = (id = this.props.match.params.id) => {
    this.setState({ isLoading: true });
    getSingleDtpedia(id).then(response => {
      console.log(response.data);
      this.setState({
        dtpediaItem: response.data,
        isLoading: false
      });
    });

    getDtpedia().then(response => {
      this.setState({ dtpediaList: response.data });
    });
  };

  createSlug = phrase => {
    return phrase.split(" ").join("-");
  };

  render() {
    return (
      <>
        {!this.state.isLoading && this.state.dtpediaItem ? (
          <Layout>
            <main className="dtpedia-page-main">
              <header
                className="dtpedia-page-header"
                style={{
                  backgroundImage: `url(${this.state.dtpediaItem.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundOrigin: "50% 50%"
                }}
              >
                <div className="dtpedia-page-overlay">
                  <h1 className="text-center">
                    {this.state.dtpediaItem.title}
                  </h1>
                  <p className="dtpedia-date">
                    {this.state.dtpediaItem.date}
                  </p>
                </div>
              </header>
              <section className="dtpedia-page-body">
                <div className="container">
                  <div className="row">
                    <ul className="dtpedia-list text-center list-unstyled mr-4 col-md-3">
                      {this.state.dtpediaList &&
                        this.state.dtpediaList.map(item => {
                          return (
                            <li className="dtpedia-item" key={item._id}>
                              <NavLink
                                onClick={() => this.getData(item._id)}
                                to={`/dtpedia/${item._id}/${this.createSlug(
                                  item.title
                                )}}`}
                                className={this.props.match.params.id === item._id && "active"}
                              >
                                {item.title}
                              </NavLink>
                            </li>
                          );
                        })}
                    </ul>
                    <article className="card dtpedia-body p-3 col-md-8">
                      <p className="text-muted h4 mb-5">
                        {this.state.dtpediaItem.body}
                      </p>
                    </article>
                  </div>
                </div>
              </section>
            </main>
          </Layout>
        ) : (
          <p className="text-center dtpedia-page-loading"> Loading ... </p>
        )}
      </>
    );
  }
}
