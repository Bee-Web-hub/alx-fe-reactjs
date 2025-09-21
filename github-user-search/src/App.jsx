import React, { useState } from 'react';
import Search from './components/Search';
import SearchBar from './components/SearchBar'; // optional
import UserCard from './components/UserCard';
import { searchUsers } from './services/githubService';

export default function App() {
  const [users, setUsers] = useState([]);       // multi-user / advanced search results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Multi-user / advanced search handler (keeps previous functionality)
  const handleMultiSearch = async (query) => {
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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>

      {/* Single user + advanced search */}
      <Search onSearch={handleMultiSearch} />

      <hr className="my-8 border-gray-600" />

      {/* Optional previous multi-user search */}
      <h2 className="text-2xl font-semibold mb-4">Multi-User Search (Optional)</h2>
      <SearchBar onSearch={handleMultiSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display search results in a grid */}
      {users.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
