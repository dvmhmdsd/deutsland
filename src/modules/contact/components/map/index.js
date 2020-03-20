import React, { Component } from "react";

// import { Map, GoogleApiWrapper } from "google-maps-react";

import "./style.css";

export default class ContactMap extends Component {
  render() {
    return (
      <section className="contact-map">
        {/* <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        /> */}
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6TZcw3aJNhQRRMTEJQmgRSw&key=AIzaSyCtQOnFMtksv_rF3RpdLEn8LSuv82gOV1s"
          allowFullScreen
          zoom="15"
        ></iframe>
      </section>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCtQOnFMtksv_rF3RpdLEn8LSuv82gOV1s"
// })(ContactMap);
