import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmed = query.trim();
      if (!trimmed) return;
      const url = `https://www.google.com/search?q=${encodeURIComponent(trimmed)}`;
      window.location.href = url;
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <input
        className="bg-white text-black search-input outline-none border-0 rounded-lg p-3 w-full md:max-w-md lg:max-w-lg"
        type="text"
        placeholder="Buscar en Google..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        aria-label="Search input"
      />
    </div>
  );
};

export default SearchBar;
