import axios from "axios";

export let getSolutions = async () => {
  let response = await axios.get("/api/solutions/list");

  return response;
};

export let addSolution = async data => {
  let response = await axios.post("/api/solutions", data);

  return response;
};

export let updateSolution = async (id, data) => {
  let response = await axios.put(`/api/solutions/${id}`, data);

  return response;
};

export let deleteSolution = async id => {
  if (window.confirm("Are you sure you want to delete this item ?"))
    return await axios.delete(`/api/solutions/${id}`);
};
