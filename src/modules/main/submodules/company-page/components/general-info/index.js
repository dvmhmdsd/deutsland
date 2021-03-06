import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default class GeneralInfo extends Component {
  render() {
    return (
      <section className="general-info">
        <div className="container">
          <h1>Who We Are</h1>
          <p>
            Proin augue neque, vestibulum vitae urna quis, ornare lobortis sem.
            Maecenas sit amet gravida neque, in mollis nulla. Aenean vel nulla
            at enim maximus varius vitae in tortor. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            maximus varius vitae in tortor. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. enim
            maximus varius vitae in tortor. Class aptent taciti socio
            <span>
              <FontAwesomeIcon className="icon" icon={faQuoteRight} />
              It is better to lead from behind and to put others in front,
              especially when you celebrate victory when nice things occur.
            </span>
            Proin augue neque, vestibulum vitae urna quis, ornare lobortis sem.
            Maecenas sit amet gravida neque, in mollis nulla. Aenean vel nulla
            at Proin augue neque, vestibulum vitae urna quis, ornare lobortis
            sem. Maecenas sit amet gravida neque, in mollis nulla. Aenean vel
            nulla at enim maximus varius vitae in tortor. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. enim maximus varius vitae in tortor. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Proin augue neque, vestibulum vitae urna quis, ornare
            lobortis sem. Maecenas sit amet gravida neque, in mollis nulla.
            Aenean vel nulla at enim maximus varius vitae in tortor. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </section>
    );
  }
}
