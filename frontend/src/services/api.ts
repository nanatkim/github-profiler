import Axios, { AxiosInstance } from "axios";

const api: AxiosInstance = Axios.create({
  baseURL: "https://localhost:3333",
});

export default api;