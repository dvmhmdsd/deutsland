import React, { Component } from "react";
import Layout from "shared/layout";
import GeneralInfo from "./components/general-info";
import BrandList from "./components/brand-list";

import Helmet from "react-helmet";

export default class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>About Us | Deutschland</title>
          <meta name="title" content="Information about us" />
          <meta name="description" content="Know more about us." />
        </Helmet>
        <div className="section pt-1">
          <GeneralInfo />
          <BrandList />
        </div>
      </Layout>
    );
  }
}
