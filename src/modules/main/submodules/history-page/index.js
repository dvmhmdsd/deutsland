import React, { Component } from "react";
import "./style.css";

import Layout from "shared/layout/index";

import Helmet from "react-helmet";

export default class History extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Our history | Deutschland</title>
          <meta name="description" content="See our history." />
        </Helmet>
        <div className="history py-5">
          <h2>History</h2>
          <div className="history-timeline">
            <section className="history-item">
              <div className="timeline-container left">
                <div className="history-content">
                  <h3>Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
                <span className="after"></span>
              </div>
              <div className="history-year year-right">
                <h3> 2017 </h3>
                <p className="text-muted">Lorem ipsum dolor sit.</p>
              </div>
            </section>
            <section className="history-item">
              <div className="timeline-container right">
                <div className="history-content">
                  <h3>Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
                <span className="after"></span>
              </div>
              <div className="history-year year-left">
                <h3> 2016 </h3>
                <p className="text-muted">Lorem ipsum dolor sit.</p>
              </div>
            </section>
            <section className="history-item">
              <div className="timeline-container left">
                <div className="history-content">
                  <h3>2015</h3>
                  <p>
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
                <span className="after"></span>
              </div>
              <div className="history-year year-right">
                <h3> 2016 </h3>
                <p className="text-muted">Lorem ipsum dolor sit.</p>
              </div>
            </section>
            <section className="history-item">
              <div className="timeline-container right">
                <div className="history-content">
                  <h3>Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
                <span className="after"></span>
              </div>
              <div className="history-year year-left">
                <h3> 2016 </h3>
                <p className="text-muted">Lorem ipsum dolor sit.</p>
              </div>
            </section>
            <section className="history-item">
              <div className="timeline-container left">
                <div className="history-content">
                  <h3>2015</h3>
                  <p>
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
                <span className="after"></span>
              </div>
              <div className="history-year year-right">
                <h3> 2016 </h3>
                <p className="text-muted">Lorem ipsum dolor sit.</p>
              </div>
            </section>
            <section className="history-item">
              <div className="timeline-container right">
                <div className="history-content">
                  <h3>Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                    nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit voluptua
                    dignissim per, habeo iusto primis ea eam.
                  </p>
                </div>
                <span className="after"></span>
              </div>
              <div className="history-year year-left">
                <h3> 2016 </h3>
                <p className="text-muted">Lorem ipsum dolor sit.</p>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}
