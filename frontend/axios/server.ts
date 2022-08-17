import axios from "axios";

const server = axios.create({
  baseURL: "http://backend:8000/api/",
});

export default server;
