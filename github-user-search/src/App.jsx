import React, { useState } from 'react';
import Search from './components/Search';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { searchUsers } from './services/githubApi';

export default function App() {
  const [users, setUsers] = useState([]);          // multi-user search
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchUsers(query);
      setUsers(data.items || []);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>GitHub User Search</h1>

      {/* Mandatory single-user search */}
      <h2>Single User Search (Mandatory)</h2>
      <Search />

      <hr style={{ margin: '20px 0' }} />

      {/* Multi-user search (previous functionality) */}
      <h2>Multi-User Search (Optional)</h2>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ marginTop: 20 }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
