import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
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
