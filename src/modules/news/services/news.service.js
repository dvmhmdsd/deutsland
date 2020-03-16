import axios from "axios";

export let getNews = async () => {
  let response = await axios.get("/api/news/list");

  return response;
};

export let getSingleNews = async (id) => {
  let response = await axios.get(`/api/news/${id}`);

  return response;
};

export let addNews = async data => {
  let response = await axios.post("/api/news", data);

  return response;
};

export let updateNews = async (id, data) => {
  let response = await axios.put(`/api/news/${id}`, data);

  return response;
};

export let deleteNews = async id => {
  if (window.confirm("Are you sure you want to delete this item ?"))
    return await axios.delete(`/api/news/${id}`);
};

export let commentToNews = async (newsId, data) => {
  let response = await axios.post(`/api/news/${newsId}/comment`, data);

  return response;
};

export let deleteNewsComment = async (commentId) => {
  let response = await axios.delete(`/api/news/comment/${commentId}`);

  return response;
};

