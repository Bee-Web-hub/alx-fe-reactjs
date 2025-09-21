// src/components/SearchBar.jsx
import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    onSearch(q.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search GitHub users..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
