import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/api/",
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("@givepoints:token");

  if (token) {
    console.log({ token });
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
