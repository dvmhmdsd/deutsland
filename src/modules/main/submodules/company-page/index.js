import React, { Component } from "react";
import Layout from "shared/layout";
import GeneralInfo from "./components/general-info";
import BrandList from "./components/brand-list";

export default class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <GeneralInfo/>
        <BrandList/>
      </Layout>
    );
  }
}
