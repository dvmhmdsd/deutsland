import axios from "axios";

export default async () => {
  if (localStorage.getItem("user")) return true;

  try {
    let response = await axios.get("/users/isLoggedIn");

    if (response.data == "OK") return true;
    else return false;

  } catch {
    return false;
  }
};
