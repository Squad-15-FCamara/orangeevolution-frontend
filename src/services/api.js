import axios from "axios";

const api = axios.create({
  baseURL: "https://orangeevolutionapi.azurewebsites.net/",
});

export default api;
