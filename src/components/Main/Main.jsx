import React from "react";
import BlogsContainer from "../BlogsContainer/BlogsContainer";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  return (
    <main className="py-[60px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-x-10">
          <BlogsContainer />
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Main;
