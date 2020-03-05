import React, { Component } from "react";
import Layout from "../../../../shared/layout";
import Intro from "./components/intro";
import Distribution from "./components/distribution";
import Partners from "./components/partners/index";
import TrustUs from "./components/trust-us";
import Counters from "./components/counters";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Layout>
          <Intro />
          <Distribution />
          <Partners />
          <TrustUs />
          <Counters/>
        </Layout>
      </>
    );
  }
}
