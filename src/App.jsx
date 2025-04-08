import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import SearchProvider from "./context/SearchProvider";

function App() {
  return (
    <>
      <SearchProvider>
        <>
          <Navbar />
          <Main />
        </>
      </SearchProvider>
    </>
  );
}

export default App;
