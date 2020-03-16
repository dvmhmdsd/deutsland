import React, { Component } from "react";

import CareersListPage from "./components/list-page";

import Layout from "shared/layout";

export default class CareersPage extends Component {
  render() {
    return (
      <Layout>
        <CareersListPage />
      </Layout>
    );
  }
}
