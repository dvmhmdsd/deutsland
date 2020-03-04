import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h3>Abou Us</h3>
              <hr/>
              <p>
                Construction SRL works as international construction services
                company and is a leading builder in diverse and numerous market
                segments. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit,
              </p>
            </div>
            <div className="col-sm">
              <h3>Contact Us</h3>
              <hr/>
              <p>
                <FontAwesomeIcon icon={faCoffee} />
                <span> info@construction.com</span><br/>
                <FontAwesomeIcon icon={faCoffee} />
                <span>(+2) 0109 835 4184</span><br/>
                <FontAwesomeIcon icon={faCoffee} />
                <span>
                  PO Box 16122, Collins Street West, Victoria 8007, United
                  States
                </span>
              </p>
            </div>
            <div className="col-sm">
              <h3>Information</h3>
              <hr/>
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
