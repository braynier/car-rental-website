"use client";

import { createContext, useContext, useState } from "react";

const searchContext = createContext();

function SearchProvider({ children }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <searchContext.Provider
      value={{
        searchActive,
        setSearchActive,
      }}
    >
      {children}
    </searchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(searchContext);
  if (context === undefined)
    throw new Error("searchContext was used outside of searchContext.Provider");

  return context;
}

export { SearchProvider, useSearch };
