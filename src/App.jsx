import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");

  const handleSearch = (searchText) => {
    setSearch(searchText);
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <Main />
    </>
  );
}

export default App;
