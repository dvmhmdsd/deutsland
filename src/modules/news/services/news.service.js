import axios from "axios";

export let getNews = async () => {
  let response = await axios.get("/news/list");

  return response;
};
