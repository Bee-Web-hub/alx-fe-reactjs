import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const token = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional
const headers = token ? { Authorization: `token ${token}` } : {};

// Fetch single user
export async function fetchUserData(username) {
  try {
    const res = await axios.get(`${BASE_URL}/users/${username}`, { headers });
    return res.data;
  } catch (error) {
    throw new Error("User not found");
  }
}

// Fetch multiple users (search)
export async function searchUsers(query) {
  try {
    const res = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
      headers,
    });
    return res.data; // { total_count, items: [...] }
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
}
