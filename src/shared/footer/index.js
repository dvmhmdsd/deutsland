import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelopeOpen,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import ReactWOW from "react-wow";

import "./style.css";
import SocialMedia from "../social";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <article className="col-lg-4">
              <ReactWOW
                animation="zoomIn"
                data-wow-duration="2s"
                data-wow-delay="10s"
              >
                <div className="item">
                  <h3 className="wow slideInLeft"> Abou Us</h3>
                  <hr />
                  <p>
                    Construction SRL works as international construction
                    services company and is a leading builder in diverse and
                    numerous market segments. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                  </p>
                </div>
              </ReactWOW>
            </article>
            <article className="col-lg-4">
              <div className="item">
                <ReactWOW
                  animation="zoomIn"
                  data-wow-duration="2s"
                  data-wow-delay="20s"
                >
                  <h3>Contact Us</h3>
                  <hr />
                  <section className="contact-item">
                    <FontAwesomeIcon className="icon" icon={faEnvelopeOpen} />
                    <a href="mailto:info@construction.com">
                      info@construction.com
                    </a>
                  </section>
                  <section className="contact-item">
                    <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
                    <a href="tel:+201098354184">(+2) 0109 835 4184</a>
                  </section>
                  <section className="contact-item">
                    <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                    <span>
                      PO Box 16122, Collins Street West, Victoria 8007, United
                      States
                    </span>
                  </section>
                </ReactWOW>
              </div>
            </article>
            <article className="col-lg-4">
              <div className="item">
                <ReactWOW
                  animation="zoomIn"
                  data-wow-duration="2s"
                  data-wow-delay="10s"
                >
                  <h3>Information</h3>
                  <hr />
                  <p>
                    Construction SRL works as international construction
                    services company and is a leading builder in diverse and
                    numerous market segments. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                  </p>
                </ReactWOW>
              </div>
            </article>
          </div>
          <SocialMedia />
        </div>
      </footer>
    );
  }
}
