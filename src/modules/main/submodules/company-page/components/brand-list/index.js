import React, { Component } from "react";

export default class BrandList extends Component {
  state = {
    data: [
      {
        image: "",
        title: "Vision",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        items: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet"
        ]
      },
      {
        image: "",
        title: "Mission",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero reprehenderit possimus nemo facere hic non explicabo, eaque consectetur eligendi repellat veritatis quasi aliquam similique deleniti, accusantium assumenda enim odio consequuntur.",
        items: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet"
        ]
      },
      {
        image: "",
        title: "Our values",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero reprehenderit possimus nemo facere hic non explicabo, eaque consectetur eligendi repellat veritatis quasi aliquam similique deleniti, accusantium assumenda enim odio consequuntur.",
        items: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet"
        ]
      }
    ]
  };

  render() {
    return <>
        { this.state.data.map(item => {
            
        }) }
    </>;
  }
}
