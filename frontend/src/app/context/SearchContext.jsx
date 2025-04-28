'use client'


import { createContext, useState, useContext } from 'react';



export const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export default function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
