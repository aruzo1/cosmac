import axios from "axios";

const client = axios.create({
  baseURL: window.origin + ":8000",
});

export default client;
