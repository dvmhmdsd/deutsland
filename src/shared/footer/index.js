import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h3>Abou Us</h3>
              <p>
                Construction SRL works as international construction services
                company and is a leading builder in diverse and numerous market
                segments. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit,
              </p>
            </div>
            <div className="col-sm">
              <h3>Contact Us</h3>
              <p>
                <FontAwesomeIcon icon={faCoffee} />
                Construction SRL works as international construction services
                company and is a leading builder in diverse and numerous market
                segments. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit,
              </p>
            </div>
            <div className="col-sm">
              <h3>Information</h3>
              <p>
                Construction SRL works as international construction services
                company and is a leading builder in diverse and numerous market
                segments. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit,
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
