import axios from "axios";

export let getClients = async () => {
  let response = await axios.get("/api/clients/list");

  return response;
};

export let addClient = async data => {
  let response = await axios.post("/api/clients", data);

  return response;
};

export let deleteClient = async id => {
  if (window.confirm("Are you sure you want to delete this item ?"))
    return await axios.delete(`/api/clients/${id}`);
};
