/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAccessToken } from "@/lib/token-handler";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:7000";

axios.interceptors.request.use(
  (config: any) => {
    config.headers["Authorization"] = getAccessToken();
    config.withCredentials = true;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
