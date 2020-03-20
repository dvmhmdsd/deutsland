import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";

import "./style.css";

import Background from "assets/partners/partners-bg.jpg";

import slide1 from "assets/partners/angus-circle.png";
import slide2 from "assets/partners/autro-circle.png";
import slide3 from "assets/partners/emi-circle.png";

import { getClients } from "modules/main/services/clients.service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

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
      backgroundImage: "url(" + Background + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed"
    };
    return (
      <div className="partners" style={sectionStyle}>
        <section className="carousel-container py-5">
          <h2 className="text-center">Our partners</h2>
          <Carousel
            activeIndex={this.state.index}
            direction={this.state.direction}
            onSelect={this.handleSelect}
            controls={true}
            indicators={false}
            nextIcon={<FontAwesomeIcon icon={faChevronRight} />}
            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
            pauseOnHover={true}
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

        {this.state.clients && this.state.clients.length > 0 && (
          <section className="keyClients carousel-container py-5">
            <h2 className="text-center">Key clients</h2>
            <Carousel
              activeIndex={this.state.index}
              direction={this.state.direction}
              onSelect={this.handleSelect}
              controls={true}
              indicators={false}
              fade={true}
              nextIcon={<FontAwesomeIcon icon={faChevronRight} />}
              prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
              pauseOnHover={true}
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
          </section>
        )}
      </div>
    );
  }
}
