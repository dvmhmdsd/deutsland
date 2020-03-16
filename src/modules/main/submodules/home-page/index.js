import React, { Component } from "react";
import Layout from "shared/layout";
import Intro from "./components/intro";
import Distribution from "./components/distribution";
import Partners from "./components/partners/index";
import TrustUs from "./components/trust-us";
import Counters from "./components/counters";
import News from "modules/news/components/slider";
import ServicesList from "../services-component/components/list";
import Approvals from "./components/approvals";

import Helmet from "react-helmet";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Layout inHome={true}>
          <Helmet>
            <title>Deutschland</title>
            <meta name="title" content="Deutschland, technology limited" />
            <meta
              name="description"
              content="The biggest and the best construction company."
            />
          </Helmet>
          <Intro />
          <ServicesList />
          <Distribution />
          <Partners />
          <TrustUs />
          <News />
          <Approvals />
          <Counters />
        </Layout>
      </>
    );
  }
}
