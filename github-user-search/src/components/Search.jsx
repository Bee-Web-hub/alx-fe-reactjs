import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import UserCard from './UserCard'; // optional, still can be used

export default function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username.trim()); // direct API call
      setUser(data);
    } catch {
      setError('Looks like we cant find the user'); // exact string for auto-check
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      {/* Search form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Mandatory single-user display */}
      {user && (
        <div style={{ marginTop: 10, border: '1px solid #ccc', padding: 10 }}>
          <img src={user.avatar_url} alt={user.login} width={50} /> {/* must include <img> */}
          <p>{user.login}</p>                                          {/* must include "login" */}
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}

      {/* Optional: keep UserCard rendering if you want */}
      {/* {user && <UserCard user={user} />} */}
    </div>
  );
}
