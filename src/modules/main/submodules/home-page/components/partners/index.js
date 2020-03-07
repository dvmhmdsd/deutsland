import React, { Component } from "react";
import Background from "assets/partners/partners-bg.png";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import slide1 from "assets/partners/angus-circle.png";
import slide2 from "assets/partners/autro-circle.png";
import slide3 from "assets/partners/emi-circle.png";

export default class Partners extends Component {
  state = {
    index: 0,
    direction: null
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };
  render() {
    const sectionStyle = {
      backgroundImage: "url(" + Background + ")"
    };
    return (
      <div className="partners" style={sectionStyle}>
        <section className="carousel-container">
          <Carousel
            activeIndex={this.state.index}
            direction={this.state.direction}
            onSelect={this.handleSelect}
            controls={false}
            indicators={false}
          >
            <Carousel.Item className="carouselItem">
              <h3>First slide label</h3>
              <img className="slid1" src={slide1} alt="First slide" />
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <h3>Second slide label</h3>
              <img src={slide2} alt="Second slide" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <h3>Third slide label</h3>
              <img src={slide3} alt="Third slide" />
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Item>
          </Carousel>
        </section>
        <section className="space"></section>
        <section className="keyClients">
          <div className="row">
            <div className="col">
              <div className="item">
                {/* <img src={}/>
                        <img src={}/>
                        <img src={}/> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
