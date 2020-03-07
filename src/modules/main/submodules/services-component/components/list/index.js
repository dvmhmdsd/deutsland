import React, { Component } from "react";

import "./style.css";

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
          <article className="slider-3d">
            <div className="slider-box d-flex justify-content-center">
              <section className={`service-item ${classes[0]}`}>item1</section>

              <section className={`service-item ${classes[1]}`}>item2</section>

              <section className={`service-item ${classes[2]}`}>item3</section>

              <section className={`service-item ${classes[3]}`}>item4</section>

              <section className={`service-item ${classes[4]}`}>item5</section>

              <section className={`service-item ${classes[5]}`}>item5</section>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
