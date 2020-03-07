import axios from "axios";

export let getNews = async () => {
  let response = await axios.get("/news/list");

  return response;
};

export let getSingleNews = async (id) => {
  let response = await axios.get(`/news/${id}`);

  return response;
};

export let addNews = async data => {
  let response = await axios.post("/news", data);

  return response;
};

export let updateNews = async (id, data) => {
  let response = await axios.put(`/news/${id}`, data);

  return response;
};

export let deleteNews = async id => {
  if (window.confirm("Are you sure you want to delete this item ?"))
    return await axios.delete(`/news/${id}`);
};

export let commentToNews = async (newsId, data) => {
  let response = await axios.post(`/news/${newsId}/comment`, data);

  return response;
};
