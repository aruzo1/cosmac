import axios from "axios";

const client = axios.create({
  baseURL: "http://51.83.131.196:8000",
});

export default client;
