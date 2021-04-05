import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://localhost:5000/api",
};
const instance = axios.create(config);

export default instance;
