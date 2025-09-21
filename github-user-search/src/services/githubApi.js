// src/services/githubApi.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const token = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional if you set .env
const headers = token ? { Authorization: `token ${token}` } : {};

export async function searchUsers(query) {
  const res = await axios.get(`${BASE_URL}/search/users`, {
    params: { q: query },
    headers,
  });
  return res.data;
}
