import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
