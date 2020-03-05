import React, { Component } from 'react';

import isUserLoggedIn from "modules/users/services/auth.service";

export default class MessagesPage extends Component {
  componentDidMount() {
    isUserLoggedIn().then(response => {
      console.log(response)
      if (! response) {
        this.props.history.push('/admin/login');
      }
    })
  }

  render() {
    return (
      <>
        <p> Messages page is ready. </p>
      </>
    )
  }
}
