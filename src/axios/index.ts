import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://cobytuzjesc.pl:5000/api"
      : "http://localhost:5000/api",
};
const instance = axios.create(config);

export default instance;
