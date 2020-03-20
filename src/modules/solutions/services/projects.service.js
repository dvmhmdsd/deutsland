import axios from "axios";

export let getProjects = async () => {
  let response = await axios.get("/api/projects/list");

  return response;
};

export let addProject = async data => {
  let response = await axios.post("/api/projects", data);

  return response;
};

export let updateProject = async (id, data) => {
  let response = await axios.put(`/api/projects/${id}`, data);

  return response;
};

export let deleteProject = async id => {
  if (window.confirm("Are you sure you want to delete this item ?"))
    return await axios.delete(`/api/projects/${id}`);
};
