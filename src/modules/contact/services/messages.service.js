import axios from "axios";

export let getMessages = async () => {
  let response = await axios.get("/messages/list");

  return response;
};

export let addMessage = async data => {
  let response = await axios.post("/messages", data);

  return response;
};

export let deleteMessages = async id => {
  if (window.confirm("Are you sure you want to delete this item ?"))
    return await axios.delete(`/messages/${id}`);
};