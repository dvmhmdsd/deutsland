import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

import { updateNews } from "modules/news/services/news.service";
import { uploadImage } from "modules/news/services/uploadImage.service";

import "./style.css";

export default class AdminTable extends Component {
  state = {
    title: "",
    body: "",
    date: "",
    image: "",
    id: "",
    isSubmitting: false,
    isSubmitted: false,
    isImageUploading: false,
    isImageUploaded: false
  };
  renderTableHeaders = headers =>
    headers.map((header, index) => (
      <th key={index} scope="col">
        {header}
      </th>
    ));

  renderTableBody = tableBody => {
    return tableBody.map((item, index) => (
      <tr key={index}>
        <td>{item.title} </td>
        <td>{item.date} </td>
        <td>
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
                image: item.image
              })
            }
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
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

    let { id, title, body, date, image } = this.state;

    this.props.updateRecord(id, { title, body, date, image }).then(() => {
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
                    <p className="alert alert-success">
                      Item Saved Successfully
                    </p>
                  ) : (
                    <form onSubmit={this.saveEdit}>
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

                      {this.props.acceptsImage &&
                      this.state.isImageUploading ? (
                        <p> Waiting for image uploading ... </p>
                      ) : this.state.isImageUploaded || this.state.image ? (
                        <section className="img-preview">
                          <img
                            src={this.state.image}
                            className="d-block"
                            width="100%"
                            alt="Preview"
                          />
                          <span
                            onClick={this.removeImage}
                            className="preview-dismiss"
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </span>
                        </section>
                      ) : (
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
                      )}

                      <button
                        type="submit"
                        disabled={this.state.isImageUploading}
                        className="btn btn-primary"
                      >
                        {this.state.isSubmitting ? "Submitting ..." : "Save"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
