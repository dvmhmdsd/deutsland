import React, { Component } from "react";

import "./style.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    body: "",
    submitting: false,
    isSuccess: false,
    isFailed: false
  };

  saveMessage = e => {
    e.preventDefault();

    let { name, email, phone, body } = this.state;

    this.setState({ submitting: true });

    this.props
      .submit({ name, email, phone, body })
      .then(() => {
        this.setState({ submitting: false, isSuccess: true });
        setTimeout(() => {
          this.setState({ submitting: false, isSuccess: false });
        }, 2000);
      })
      .catch(() => {
        this.setState({ submitting: false, isFailed: true });

        setTimeout(() => {
          this.setState({ submitting: false, isFailed: false });
        }, 2000);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        {this.state.isSuccess && (
          <p className="alert alert-success w-50">
            Message Sent Successfully
          </p>
        )}

        {this.state.isFailed && (
          <p className="alert alert-danger w-50">
            An Error Occurred, please try again later
          </p>
        )}
        <form className="contact-form mt-5" onSubmit={e => this.saveMessage(e)}>
          <div className="row">
            <div className="form-group col-6">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-6">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              name="phone"
              type="number"
              className="form-control"
              placeholder="Phone"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="body"
              className="form-control w-100"
              placeholder="Type your message"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <button type="submit" className="contact-submit">
            {this.state.submitting ? "Submitting ..." : "Send Message"}
          </button>
        </form>
      </>
    );
  }
}
