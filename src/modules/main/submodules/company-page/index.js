import React, { Component } from "react";
import Layout from './../../../../shared/layout/index';
import GeneralInfo from "./components/general-info";

export default class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <GeneralInfo/>
      </Layout>
    );
  }
}
