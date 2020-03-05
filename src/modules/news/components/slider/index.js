import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import { getNews } from "modules/news/services/news.service";

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
      <>
        <Carousel
          direction={this.state.direction}
          controls="false"
          indicators="false"
        >
          {this.state.news.length > 0 &&
            this.state.news.map((newsItem, index) => (
              <Carousel.Item key={index} className="carouselItem">
                <h3> {newsItem.title} </h3>
                {/* <img className="slid1" src={slide1} alt="First slide" /> */}
                <p>
                  {newsItem.body.slice(0, 20)}...
                </p>
              </Carousel.Item>
            ))}
        </Carousel>
      </>
    );
  }
}
