import React, { Component } from "react";

import Layout from "shared/layout";

import "./style.css";
import {
  getSingleNews,
  commentToNews,
  deleteNewsComment
} from "../../services/news.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default class NewsPage extends Component {
  state = {
    newsItem: null,
    comments: [],
    body: "",
    name: "",
    isAdmin: false,
    error: null,
    isLoading: false,
    isDeleting: false
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    getSingleNews(id).then(response => {
      this.setState({
        newsItem: response.data,
        comments: response.data.comments
      });
    });

    this.isUserAdmin();
  }

  isUserAdmin = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    if (user.type === "admin") this.setState({ isAdmin: true });
  };

  deleteComment = id => {
    this.setState({ isDeleting: true });

    deleteNewsComment(id).then(res => {
      this.setState({ commentDeleted: true, newsItem: res.data });

      this.setState({ isDeleting: false });

      setTimeout(() => {
        this.setState({ commentDeleted: false });
      }, 2000);
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  saveComment = e => {
    e.preventDefault();

    let { name, body, newsItem } = this.state;

    this.setState({ isLoading: true });

    commentToNews(newsItem._id, { name, body }).then(res => {
      this.setState({
        newsItem: res.data,
        isLoading: false
      });
    });
  };

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
                  <div className="card p-3">
                    <p className="text-muted h4 mb-5">
                      {this.state.newsItem.body}
                    </p>
                    <hr />
                    <section>
                      <section className="comment-form mb-5 w-50">
                        <form onSubmit={this.saveComment}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="comment-body"
                              name="name"
                              value={this.state.name}
                              onChange={this.handleChange}
                              placeholder="Type your name"
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              id="comment-body"
                              name="body"
                              value={this.state.body}
                              onChange={this.handleChange}
                              rows={3}
                              placeholder="Leave a comment"
                            ></textarea>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary ml-3"
                          >
                            {this.state.isLoading ? "Loading ..." : "Comment"}
                          </button>
                        </form>
                      </section>

                      <header>
                        <h2 className="mb-4">
                          Comments (
                          {this.state.newsItem.comments &&
                          this.state.newsItem.comments.length
                            ? this.state.newsItem.comments.length
                            : 0}
                          )
                        </h2>
                      </header>

                      {this.state.commentDeleted && (
                        <p className="alert alert-success">
                          Comment deleted successfully.
                        </p>
                      )}

                      <ul className="list-unstyled comments-list">
                        {this.state.newsItem.comments.map((comment, index) => (
                          <li className="comment-item" key={index}>
                            <p className="mb-1"> {comment.body} </p>
                            <small className="font-weight-bold">
                              {comment.name}
                            </small>
                            {this.state.isAdmin && (
                              <span
                                className="delete-comment"
                                onClick={() => this.deleteComment(comment._id)}
                              >
                                <FontAwesomeIcon
                                  icon={
                                    this.state.isDeleting ? faCircleNotch : faTrash
                                  }
                                />
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
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
