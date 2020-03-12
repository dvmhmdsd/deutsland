import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faLinkedIn
// } from "@fortawesome/free-brands-svg-icons";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
export default class SocialMedia extends Component {
  state = {
    social: [
      { icon: faMapMarkerAlt, link: "https://facebook.com" },
      { icon: faMapMarkerAlt, link: "https://twitter.com" },
      { icon: faMapMarkerAlt, link: "https://linkedin.com" }
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
