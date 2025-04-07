import React, { useState } from "react";
import BlogsContainer from "../BlogsContainer/BlogsContainer";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    setReadingTime(readingTime + blog.reading_time);
    setBookMarks([...bookMarks, blog]);
  };

  const handleMarkAsRead = (blogId) => {
    const filteredBookMarks = bookMarks.filter(
      (bookmark) => bookmark.id !== blogId
    );
    setBookMarks(filteredBookMarks);
  };

  return (
    <main className="py-[60px]">
      <div className="container mx-auto">
        <div className="flex items-start justify-between gap-x-10">
          <BlogsContainer
            bookMarks={bookMarks}
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          />
          <Sidebar bookMarks={bookMarks} readingTime={readingTime} />
        </div>
      </div>
    </main>
  );
};

export default Main;
