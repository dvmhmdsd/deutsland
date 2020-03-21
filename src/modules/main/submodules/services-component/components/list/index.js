import React, { Component } from "react";

import "./style.css";

import serviceImage1 from "assets/services/greyscale-01.png";
import serviceImage2 from "assets/services/greyscale-02.png";
import serviceImage3 from "assets/services/greyscale-03.png";
import serviceImage4 from "assets/services/greyscale-04.png";
import serviceImage5 from "assets/services/greyscale-05.png";
import serviceImage6 from "assets/services/greyscale-06.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

export default class ServicesList extends Component {
  state = {
    classes: [
      "slider-front",
      "front-right",
      "back-right",
      "slider-back",
      "back-left",
      "front-left"
    ],
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  scrollHandler = e => {
    if (this.isComponentInViewport() && !this.isMobile()) {
      this.slide();
    } else {
      this.isInterval = false;
      clearInterval(this.slideInterval);
    }
  };

  isMobile = () => {
    return this.state.width <= 991;
  };

  isComponentInViewport = () => {
    return (
      window.pageYOffset >= this.servicesItems.offsetTop - 350 &&
      window.pageYOffset <= 1260
    );
  };

  slide = () => {
    if (!this.isInterval) {
      this.isInterval = true;
      this.slideInterval = setInterval(() => {
        this.setState({ classes: this.slideArray(this.state.classes) });
      }, 2500);
    }
  };

  slideRight = () => {
    this.setState({ classes: this.slideArray(this.state.classes) });
    clearInterval(this.slideInterval);
    // this.slideInterval = null;
    this.isInterval = false;

    setTimeout(() => this.slide(), 3000);
  };

  slideLeft = () => {
    this.setState({ classes: this.slideArray(this.state.classes, "left") });
    clearInterval(this.slideInterval);
    // this.slideInterval = null;
    this.isInterval = false;

    setTimeout(() => this.slide(), 3000);
  };

  slideArray = (classesArray, direction) => {
    if (direction === "left") {
      let classItem = classesArray.pop();
      classesArray.unshift(classItem);

      return classesArray;
    }

    let classItem = classesArray.shift();
    classesArray.push(classItem);

    return classesArray;
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  render() {
    let { classes } = this.state;
    return (
      <section ref={el => (this.servicesItems = el)} className="section">
        <div className="container">
          <h2 className="text-center mb-5 section-heading"> Services </h2>
          <div className="slider-controls d-md-flex d-none justify-content-between">
            <button className="slider-btn" onClick={this.slideLeft}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="slider-btn" onClick={this.slideRight}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <article
            onMouseEnter={() => {
              clearInterval(this.slideInterval);
              this.slideInterval = null;
              this.isInterval = false;
            }}
            onMouseLeave={() => {
              this.slide();
            }}
            className="slider-3d"
          >
            <div className="slider-box d-lg-flex justify-content-center">
              <section className={`service-item ${classes[0]}`}>
                <h3 className="service-heading"> Design </h3>
                <div className="d-flex service-body">
                  <img
                    src={serviceImage1}
                    alt="service Item thumbnail"
                    width="150"
                  />
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus quam ipsum ratione maiores necessitatibus dolorum
                    cumque facere, fugiat consequatur ut!
                  </p>
                </div>
              </section>

              <section className={`service-item ${classes[1]}`}>
                <h3 className="service-heading"> Engineering </h3>
                <div className="d-flex service-body">
                  <img
                    src={serviceImage2}
                    alt="service Item thumbnail"
                    width="150"
                  />
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus quam ipsum ratione maiores necessitatibus dolorum
                    cumque facere, fugiat consequatur ut!
                  </p>
                </div>
              </section>

              <section className={`service-item ${classes[2]}`}>
                <h3 className="service-heading"> Installation </h3>
                <div className="d-flex service-body">
                  <img
                    src={serviceImage3}
                    alt="service Item thumbnail"
                    width="150"
                  />
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus quam ipsum ratione maiores necessitatibus dolorum
                    cumque facere, fugiat consequatur ut!
                  </p>
                </div>
              </section>

              <section className={`service-item ${classes[3]}`}>
                <h3 className="service-heading">After Sales</h3>
                <div className="d-flex service-body">
                  <img
                    src={serviceImage4}
                    alt="service Item thumbnail"
                    width="150"
                  />
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus quam ipsum ratione maiores necessitatibus dolorum
                    cumque facere, fugiat consequatur ut!
                  </p>
                </div>
              </section>

              <section className={`service-item ${classes[4]}`}>
                <h3 className="service-heading"> Testing & Commissioning </h3>
                <div className="d-flex service-body">
                  <img
                    src={serviceImage5}
                    alt="service Item thumbnail"
                    width="150"
                  />
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus quam ipsum ratione maiores necessitatibus dolorum
                    cumque facere, fugiat consequatur ut!
                  </p>
                </div>
              </section>

              <section className={`service-item ${classes[5]}`}>
                <h3 className="service-heading"> Project Management </h3>
                <div className="d-flex service-body">
                  <img
                    src={serviceImage6}
                    alt="service Item thumbnail"
                    width="150"
                  />
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus quam ipsum ratione maiores necessitatibus dolorum
                    cumque facere, fugiat consequatur ut!
                  </p>
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
