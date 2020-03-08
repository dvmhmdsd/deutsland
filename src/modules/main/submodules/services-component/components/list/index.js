import React, { Component } from "react";

import "./style.css";

import serviceImage1 from "assets/services/greyscale-01.png";
import serviceImage2 from "assets/services/greyscale-02.png";
import serviceImage3 from "assets/services/greyscale-03.png";
import serviceImage4 from "assets/services/greyscale-04.png";
import serviceImage5 from "assets/services/greyscale-05.png";
import serviceImage6 from "assets/services/greyscale-06.png";

export default class ServicesList extends Component {
  state = {
    classes: [
      "slider-front",
      "front-right",
      "back-right",
      "slider-back",
      "back-left",
      "front-left"
    ]
  };

  slideArray = classesArray => {
    let classItem = classesArray.shift();
    classesArray.push(classItem);

    return classesArray;
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ classes: this.slideArray(this.state.classes) });
    }, 4000);
  }

  render() {
    let { classes } = this.state;
    return (
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5 section-heading"> Services </h2>
          <article className="slider-3d">
            <div className="slider-box d-flex justify-content-center">
              <section className={`service-item ${classes[0]}`}>
                <h3 className="service-heading"> Design </h3>
                <div className="d-flex">
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
                <div className="d-flex">
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
                <div className="d-flex">
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
                <div className="d-flex">
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
                <div className="d-flex">
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
                <div className="d-flex">
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
