import axios from "axios";

let addUser = async user => {
  let response = await axios.post(
    "http://localhost:5000/api/users/register",
    user
  );

  return response;
};

let deleteUser = async id => {
  let response = await axios.delete(`http://localhost:5000/api/users/${id}`);

  return response;
};

let getUsers = async id => {
  let response = await axios.get("http://localhost:5000/api/users/list");

  return response;
};

export default {
  addUser,
  deleteUser,
  getUsers
};
