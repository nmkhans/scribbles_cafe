import React, { useState } from "react";
import BlogsContainer from "../BlogsContainer/BlogsContainer";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  const [bookMarks, setBookMarks] = useState([]);

  const handleBookMark = (blog) => {
    setBookMarks([...bookMarks, blog]);
  };

  return (
    <main className="py-[60px]">
      <div className="container mx-auto">
        <div className="flex items-start justify-between gap-x-10">
          <BlogsContainer
            bookMarks={bookMarks}
            handleBookMark={handleBookMark}
          />
          <Sidebar bookMarks={bookMarks} />
        </div>
      </div>
    </main>
  );
};

export default Main;
