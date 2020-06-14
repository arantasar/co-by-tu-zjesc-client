import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://localhost:5000/api",
};
const instance = axios.create(config);

export default instance;
