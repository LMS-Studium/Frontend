// api.js
import axios from "axios";

const API_URL = "http://localhost:8080/auth";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("An error occurred during login");
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("An error occurred during registration");
  }
};

export const getUserProfile = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("An error occurred while fetching user profile");
  }
};

// Add more API calls as needed

export default api;
