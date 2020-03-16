import React, { Component } from "react";

import Layout from "shared/layout";

import ContactMap from "./components/map";
import ContactInfo from "./components/info";
import ContactForm from "./components/form";

import "./style.css";

import { sendMessage } from "./services/messages.service";

export default class ContactPage extends Component {
  sendMessage = data => {
    return sendMessage(data);
  };

  render() {
    return (
      <Layout>
        <article className="row">
          <section className="contact-map col-md-6">
            <ContactMap />
          </section>

          <section className="main-contact col-md-6">
            <h1> Contact Us </h1>
            <hr />

            <ContactInfo />

            <ContactForm submit={this.sendMessage} />
          </section>
        </article>
      </Layout>
    );
  }
}
