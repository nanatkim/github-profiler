import Axios, { AxiosInstance } from "axios";

const api: AxiosInstance = Axios.create({
  baseURL: "http://localhost:3333",
});

export default api;