import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    'api_key': 'e3179680-b6c3-11ed-9966-83ad01152259',
    'Accept': 'application/json',
  },
});

export default apiClient;
