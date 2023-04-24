import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// Get the authorization token from localStorage if it exists
const persistRoot = localStorage.getItem("persist:root");
const currentUser = persistRoot ? JSON.parse(JSON.parse(persistRoot).user).currentUser : null;
console.log(currentUser)
const TOKEN = currentUser ? currentUser.accessToken : null;

// Create an axios instance for making public API requests
export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` }
});

// Create an axios instance for making authorized API requests
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
