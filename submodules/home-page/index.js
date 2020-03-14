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

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Layout>
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