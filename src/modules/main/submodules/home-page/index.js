import React, { Component } from "react";
import Layout from "../../../../shared/layout";
import Intro from "./components/intro";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Layout>
          <Intro />
        </Layout>
      </>
    );
  }
}
