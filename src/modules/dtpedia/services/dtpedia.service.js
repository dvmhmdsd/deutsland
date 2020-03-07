import axios from "axios";

export let getDtpedia = async () => {
  let response = await axios.get("/dtpedia/list");

  return response;
};

export let getSingleDtpedia = async (id) => {
  let response = await axios.get(`/dtpedia/${id}`);

  return response;
};

export let addDtpedia = async data => {
  let response = await axios.post("/dtpedia", data);

  return response;
};

export let updateDtpedia = async (id, data) => {
  let response = await axios.put(`/dtpedia/${id}`, data);

  return response;
};

export let deleteDtpedia = async id => {
  if (window.confirm("Are you sure you want to delete this item ?"))
    return await axios.delete(`/dtpedia/${id}`);
};
