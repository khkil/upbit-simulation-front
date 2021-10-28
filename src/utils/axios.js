import axios from "axios";

export default axios.create({
  validateStatus: (status) => status < 500,
});

axios.interceptors.request.use((config) => {
  return config;
});