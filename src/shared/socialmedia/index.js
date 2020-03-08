import React, { Component } from "react";
import { faFacebook} from "@fortawesome/free-solid-svg-icons";
import { faLinkedIn} from "@fortawesome/free-solid-svg-icons";
import { faTwitter} from "@fortawesome/free-solid-svg-icons";

export default class SocialMedia extends Component {
  render() {
    return (
      <div className="socialMedia">
        <FontAwesomeIcon className="icon" icon={faFacebook} />
        <FontAwesomeIcon className="icon" icon={faLinkedIn} />
        <FontAwesomeIcon className="icon" icon={faTwitter} />
      </div>
    );
  }
}
