import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelopeOpen,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

import countries from "globals/countries";

import "./style.css"

export default class ContactInfo extends Component {
  state = {
    info: [
      {
        mail: "info@construction.com",
        phone: "+201098354184",
        address:
          "PO Box 16122, Collins Street West, Victoria 8007, United States",
        country: "egypt"
      },
      {
        mail: "info2@construction.com",
        phone: "+201098354184",
        address:
          "PO Box 16122, Collins Street West, Victoria 8007, United States",
        country: "ksa"
      },
      {
        mail: "info3@construction.com",
        phone: "+201098354184",
        address:
          "PO Box 16122, Collins Street West, Victoria 8007, United States",
        country: "uae"
      }
    ],
    currentItem: countries[0]
  };

  componentDidMount() {
    this.getCurrentItem();
  }

  getCurrentItem = (country = "egypt") => {
    let activeItem = this.state.info.find(item => {
      return item.country === country;
    });

    this.setState({
      currentItem: activeItem
    });
  };

  render() {
    let { currentItem } = this.state;
    return (
      <>
        <select
          className="form-control w-50 mb-4"
          onChange={e => this.getCurrentItem(e.target.value)}
        >
          {countries.map(country => (
            <option value={country}>{country}</option>
          ))}
        </select>

        <section className="info">
          <ul className="list-unstyled mt-2">
            <li>
              <FontAwesomeIcon className="icon mr-2" icon={faEnvelopeOpen} />
              <a href={`mailto:${currentItem.mail}`}>{currentItem.mail}</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon mr-2" icon={faPhoneAlt} />
              <a href={`tel:${currentItem.phone}`}>{currentItem.phone}</a>
            </li>
            <li>
              <FontAwesomeIcon className="icon mr-2" icon={faMapMarkerAlt} />
              <span>{currentItem.address}</span>
            </li>
          </ul>
        </section>
        {/* <section className="contact-item">
        </section>
        <section className="contact-item">
          <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
          <a href="tel:+201098354184">(+2) 0109 835 4184</a>
        </section>
        <section className="contact-item">
          <span>
            PO Box 16122, Collins Street West, Victoria 8007, United States
          </span>
        </section> */}
      </>
    );
  }
}
