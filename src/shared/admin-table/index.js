import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faTimes,
  faEye
} from "@fortawesome/free-solid-svg-icons";

import { uploadImage } from "modules/news/services/uploadImage.service";

import "./style.css";

export default class AdminTable extends Component {
  state = {
    title: " ",
    body: " ",
    date: "",
    image: "",
    id: "",
    name: " ",
    link: "",
    type: " ",
    password: " ",
    email: " ",
    isSubmitting: false,
    isSubmitted: false,
    isImageUploading: false,
    isImageUploaded: false
  };

  renderTableHeaders = headers =>
    headers.map((header, index) => (
      <th key={index} scope="col">
        {header.toUpperCase()}
      </th>
    ));

  renderTableBody = tableBody => {
    return tableBody.map((item, index) => (
      <tr key={index}>
        {this.props.headers.map(key => (
          <td key={key}> {item[key]} </td>
        ))}
        <td>
          {this.props.isEditable
            ? this.renderEditBtn(item)
            : this.props.isDetailed
            ? this.renderShowBtn(item)
            : ""}

          <button
            className="btn btn-danger"
            onClick={() => this.deleteItem(item._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    ));
  };

  renderEditBtn = (item) => (
    <button
      className="btn btn-secondary mr-2"
      data-toggle="modal"
      data-target="#editModal"
      title="Edit Item"
      onClick={() =>
        this.setState({
          id: item._id,
          title: item.title,
          body: item.body,
          image: item.image,
          name: item.name,
          email: item.email,
          password: item.password,
          type: item.type
        })
      }
    >
      <FontAwesomeIcon icon={faEdit} />
    </button>
  );

  renderShowBtn = (item) => (
    <button
      className="btn btn-secondary mr-2"
      data-toggle="modal"
      data-target="#editModal"
      title="Show Details"
      onClick={() =>
        this.setState({
          body: item.body
        })
      }
    >
      <FontAwesomeIcon icon={faEye} />
    </button>
  );

  formatDate = () => {
    let currentDateTime = new Date();
    let formattedDate =
      currentDateTime.getFullYear() +
      "-" +
      (currentDateTime.getMonth() + 1) +
      "-" +
      currentDateTime.getDate();

    this.setState({
      date: formattedDate
    });
  };

  removeImage = () => {
    this.setState({ image: "" });
  };

  componentDidMount() {
    this.formatDate();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteItem = id => this.props.deleteRecord(id);

  handleImageInputChange = e => {
    this.setState({ isImageUploading: true });
    uploadImage(e.target.files[0]).then(res => {
      this.setState({
        isImageUploading: false,
        isImageUploaded: true,
        image: res.data.secure_url
      });
    });
  };

  saveEdit = e => {
    e.preventDefault();

    this.setState({ isSubmitting: true });

    let {
      id,
      title,
      body,
      date,
      image,
      name,
      type,
      password,
      email
    } = this.state;

    this.props
      .updateRecord(
        id,
        !this.props.isUsersTable
          ? { title, body, date, image }
          : { name, type, password, email }
      )
      .then(() => {
        this.setState({ isSubmitting: false, isSubmitted: true });

        this.props.updateParentState();

        setTimeout(() => {
          this.setState({ isSubmitted: false });
        }, 2000);
      });
  };

  render() {
    let { headers, body, className } = this.props;
    return (
      <>
        <table className={`${className} table`}>
          <thead>
            <tr>{this.renderTableHeaders(headers)}</tr>
          </thead>
          <tbody>{this.renderTableBody(body)}</tbody>
        </table>

        <div>
          <div
            className="modal fade"
            id="editModal"
            tabIndex={-1}
            role="dialog"
          >
            {this.props.isEditable
              ? this.renderEditForm()
              : this.renderDetailsModal()}
          </div>
        </div>
      </>
    );
  }

  renderEditForm = () => (
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Item</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          {this.state.isSubmitted ? (
            <p className="alert alert-success">Item Saved Successfully</p>
          ) : (
            <form onSubmit={this.saveEdit}>
              {this.props.isUsersTable ? (
                this.renderUserForm()
              ) : (
                <>
                  {this.props.isClientTable
                    ? this.renderClientForm()
                    : this.renderRegularForm()}

                  {this.props.acceptsImage && this.state.isImageUploading ? (
                    <p> Waiting for image uploading ... </p>
                  ) : this.state.isImageUploaded || this.state.image ? (
                    this.renderImagePreview()
                  ) : (
                    this.renderImageUpload()
                  )}

                  <button
                    type="submit"
                    disabled={this.state.isImageUploading}
                    className="btn btn-primary"
                  >
                    {this.state.isSubmitting ? "Submitting ..." : "Save"}
                  </button>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );

  renderImagePreview = () => (
    <section className="img-preview">
      <img
        src={this.state.image}
        className="d-block"
        width="100%"
        alt="Preview"
      />
      <span onClick={this.removeImage} className="preview-dismiss">
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </section>
  );

  renderImageUpload = () => (
    <div className="form-group">
      <label htmlFor="image">Upload Image</label>
      <input
        type="file"
        onChange={this.handleImageInputChange}
        className="form-control-file"
        id="image"
        accept="image/*"
      />
    </div>
  );

  renderRegularForm = () => (
    <>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body</label>
        <textarea
          className="form-control"
          id="body"
          rows={3}
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />
      </div>
    </>
  );

  renderUserForm = () => (
    <>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </div>
      <div className="row">
        <div className="form-group col-6">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="name">Type</label>
          <select
            className="form-control"
            value={this.state.type}
            onChange={this.handleChange}
          >
            <option value="admin">Admin</option>
            <option value="data entry">Data Entry</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        {this.state.isSubmitting ? "Submitting ..." : "Save"}
      </button>
    </>
  );

  renderClientForm = () => (
    <>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="link">Link</label>
        <input
          type="url"
          className="form-control"
          id="link"
          name="link"
          value={this.state.link}
          onChange={this.handleChange}
        />
      </div>
    </>
  );

  renderDetailsModal = () => (
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Details</h5>
        </div>
        <div className="modal-body">
          <p> {this.state.body} </p>
        </div>
      </div>
    </div>
  );
}
