import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";

import "./style.css";

import Background from "assets/partners/partners-bg.png";
import slide1 from "assets/partners/angus-circle.png";
import slide2 from "assets/partners/autro-circle.png";
import slide3 from "assets/partners/emi-circle.png";

import { getClients } from "modules/main/services/clients.service";

export default class Partners extends Component {
  state = {
    index: 0,
    direction: null,
    clients: null,
    partners: [
      {
        image: slide1,
        caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
      },
      {
        image: slide2,
        caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
      },
      {
        image: slide3,
        caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
      }
    ]
  };

  async componentDidMount() {
    let { data: clients } = await getClients();

    this.setState({ clients });
  }

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
      <div className="partners section" style={sectionStyle}>
        <section className="carousel-container">
          <Carousel
            activeIndex={this.state.index}
            direction={this.state.direction}
            onSelect={this.handleSelect}
            controls={true}
            indicators={false}
          >
            {this.state.partners.map((partner, index) => {
              let { image, caption } = partner;
              return (
                <Carousel.Item key={index} className="carouselItem">
                  <img src={image} alt="partner logo" />
                  <p>{caption}</p>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </section>

        {this.state.clients && (
          <Carousel className="keyClients carousel-container">
            <Carousel
              activeIndex={this.state.index}
              direction={this.state.direction}
              onSelect={this.handleSelect}
              controls={true}
              indicators={false}
              fade={true}
            >
              {this.state.clients.map((client, index) => {
                let { image, link } = client;
                return (
                  <Carousel.Item key={index} className="carouselItem">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <img src={image} alt="client logo" />
                    </a>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Carousel>
        )}
      </div>
    );
  }
}
