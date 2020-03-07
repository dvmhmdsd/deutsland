import React, { Component } from "react";
import { getDtpedia } from "../../services/dtpedia.service"

export default class DTPediaListPage extends Component {
  state = {
    dtpedia: null
  };
  componentDidMount() {
    getDtpedia().then(response => {
      let firstItem = response.data[0];

      let slug = firstItem.title.split(" ").join("-");

      this.props.history.push(`/dtpedia/${firstItem._id}/${slug}`);
    });
  }
  render() {
    return <></>;
  }
}
