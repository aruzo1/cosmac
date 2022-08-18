import axios from "axios";

let baseURL;

try {
  baseURL = location.protocol + "//" + location.hostname + ":8000/api/";
} catch {
  baseURL = "/api/";
}

const client = axios.create({ baseURL });

export default client;
