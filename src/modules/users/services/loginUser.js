import axios from "axios";

export default async data => {
  let response = await axios.post(
    "http://localhost:5000/api/users/login",
    data
  );

  // Save to localStorage
  localStorage.setItem("user", JSON.stringify(response.data.user));

  return response;
};
