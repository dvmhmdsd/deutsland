import React, { Component } from "react";
import "./style.css";

import Layout from "shared/layout/index";
export default class History extends Component {
  render() {
    return (
      <Layout>
        <div className="history py-5">
          <h2>History</h2>
          <div className="history-timeline">
            <div className="timeline-container left">
              <div className="history-content">
                <h3>2017</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
              <span className="after"></span>
            </div>
            <div className="timeline-container right">
              <div className="history-content">
                <h3>2016</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
              <span className="after"></span>
            </div>
            <div className="timeline-container left">
              <div className="history-content">
                <h3>2015</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
              <span className="after"></span>
            </div>
            <div className="timeline-container right">
              <div className="history-content">
                <h3>2012</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
              <span className="after"></span>
            </div>
            <div className="timeline-container left">
              <div className="history-content">
                <h3>2011</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
              <span className="after"></span>
            </div>
            <div className="timeline-container right">
              <div className="history-content">
                <h3>2007</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
              <span className="after"></span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
