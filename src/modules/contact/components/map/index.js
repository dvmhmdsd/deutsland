import React, { Component } from "react";

import { Map, GoogleApiWrapper } from "google-maps-react";

import "./style.css"

class ContactMap extends Component {
  render() {
    return (
      <section className="contact-map">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        />
      </section>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCtQOnFMtksv_rF3RpdLEn8LSuv82gOV1s"
  })(ContactMap);