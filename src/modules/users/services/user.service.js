import axios from "axios";

export let addUser = async user => {
  let response = await axios.post("/users/register", user);

  return response;
};

export let updateUser = async (id, user) => {
  let response = await axios.put(`/users/${id}`, user);

  localStorage.setItem("user", JSON.stringify(user));

  return response;
};

export let deleteUser = async id => {
  let response = await axios.delete(`/users/${id}`);

  return response;
};

export let getUsers = async () => {
  let response = await axios.get("/users/list");

  return response;
};
