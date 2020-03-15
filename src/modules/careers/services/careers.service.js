import axios from "axios";

export let getCareers = async () => {
  let response = await axios.get("/careers/list");

  return response;
};

// export let getSingleCareers = async (id) => {
//   let response = await axios.get(`/careers/${id}`);

//   return response;
// };

export let addCareer = async data => {
  let response = await axios.post("/careers", data);

  return response;
};

export let updateCareer = async (id, data) => {
  let response = await axios.put(`/careers/${id}`, data);

  return response;
};

export let deleteCareer = async id => {
  if (window.confirm("Are you sure you want to delete this item ?"))
    return await axios.delete(`/careers/${id}`);
};
