import axios from "axios";

export let getProjects = async () => {
  let response = await axios.get("/projects/list");

  return response;
};

export let addProject = async data => {
  let response = await axios.post("/projects", data);

  return response;
};

export let updateProject = async (id, data) => {
  let response = await axios.put(`/projects/${id}`, data);

  return response;
};

export let deleteProject = async id => {
  if (window.confirm("Are you sure you want to delete this item ?"))
    return await axios.delete(`/projects/${id}`);
};
