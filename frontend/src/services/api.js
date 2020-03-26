import Auth from "./auth";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(async config => {
  const { id } = Auth.getOng();

  if(id) {
    config.headers.Authorization = `${id}`
  }

  return config;
}, function(error) {
  return Promise.reject(error);
});
export default api;