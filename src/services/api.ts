import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/api/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@streamelements:token");

  if (token) {
    config.headers = {
      ...config.headers,
      streamelements_token: token,
    };
  }

  return config;
});

export default api;
