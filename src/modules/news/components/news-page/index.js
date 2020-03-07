import React, { Component } from "react";

import Layout from "shared/layout";

import "./style.css";
import { getSingleNews } from "../../services/news.service";

export default class NewsPage extends Component {
  state = {
    newsItem: null
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    getSingleNews(id).then(response => {
      console.log(response.data);
      this.setState({ newsItem: response.data });
    });
  }

  render() {
    return (
      <>
        {this.state.newsItem ? (
          <Layout>
            <main className="news-page-main">
              <header
                className="news-page-header"
                style={{
                  backgroundImage: `url(${this.state.newsItem.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundOrigin: "50% 50%"
                }}
              >
                <div className="news-page-overlay">
                  <h1 className="text-center"> {this.state.newsItem.title} </h1>
                  <p className="news-date"> {this.state.newsItem.date} </p>
                </div>
              </header>
              <section className="news-page-body">
                <div className="container">
                  <p className="text-muted"> {this.state.newsItem.body} </p>
                </div>
              </section>
            </main>
          </Layout>
        ) : (
          <p className="text-center news-page-loading"> Loading ... </p>
        )}
      </>
    );
  }
}
