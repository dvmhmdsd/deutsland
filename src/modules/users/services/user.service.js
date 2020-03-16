import axios from "axios";

export let addUser = async user => {
  let response = await axios.post("/api/users/register", user);

  return response;
};

export let updateUser = async (id, user) => {
  let response = await axios.put(`/api/users/${id}`, user);

  localStorage.setItem("user", JSON.stringify(user));

  return response;
};

export let deleteUser = async id => {
  let response = await axios.delete(`/api/users/${id}`);

  return response;
};

export let getUsers = async () => {
  let response = await axios.get("/api/users/list");

  return response;
};
