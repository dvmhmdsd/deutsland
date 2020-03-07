import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import { getNews } from "modules/news/services/news.service";

import { Link } from "react-router-dom";
 
import "./style.css";

export default class News extends Component {
  state = {
    direction: null,
    news: []
  };

  async componentDidMount() {
    let { data } = await getNews();

    this.setState({ news: data });
  }

  render() {
    return (
      <section className="section container">
        <h2 className="news-heading text-center"> News & Events </h2>
        <Carousel
          direction={this.state.direction}
          controls="false"
          indicators="false"
        >
          {this.state.news.length > 0 &&
            this.state.news.map((newsItem, index) => (
              <Carousel.Item
                key={index}
                style={{ backgroundImage: "url(" + newsItem.image + ")", backgroundSize: "cover" }}
                className="newsCarouselItem"
              >
                <div className="news-overlay">
                  <h3>
                    <Link to={`/news/${newsItem._id}`}> {newsItem.title} </Link>
                  </h3>
                  <p>{newsItem.body}</p>
                </div>
              </Carousel.Item>
            ))}
        </Carousel>
      </section>
    );
  }
}
