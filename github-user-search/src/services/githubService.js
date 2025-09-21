// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const token = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional
const headers = token ? { Authorization: `token ${token}` } : {};

export async function fetchUserData(username) {
  try {
    const res = await axios.get(`${BASE_URL}/users/${username}`, { headers });
    return res.data; // object with user info
  } catch (error) {
    throw new Error("User not found");
  }
}
