import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import "./style.css";
export default class SocialMedia extends Component {
  state = {
    social: [
      { icon: faFacebook, link: "https://facebook.com" },
      { icon: faTwitter, link: "https://twitter.com" },
      { icon: faLinkedin, link: "https://linkedin.com" }
    ]
  };
  render() {
    return (
      <ul className="list-unstyled social-links">
        {this.state.social.map((item, index) => {
          let { icon, link } = item;

          return (
            <li className="social-link-item" key={`social${index}`}>
              <a href={link}>
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}
