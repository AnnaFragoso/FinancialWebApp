import axios from "axios";
console.log(process.env.REACT_APP_BACKEND)
const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {"Access-Control-Allow-Origin": "*"} 
});

export { api };