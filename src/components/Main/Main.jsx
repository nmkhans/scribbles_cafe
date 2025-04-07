import React, { use, useEffect, useState } from "react";
import BlogsContainer from "../BlogsContainer/BlogsContainer";
import Sidebar from "../Sidebar/Sidebar";
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
} from "../../utils/localstorage";
import { getBlogs } from "../../fetchers/getBlogs";

const blogPromise = getBlogs();

const Main = () => {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const blogs = use(blogPromise);

  useEffect(() => {
    const bookMarkIds = getFromLocalStorage();
    const bookMarkList = [];

    bookMarkIds.forEach((id) => {
      const bookMarkedBlog = blogs.find((blog) => blog.id === id);

      if (bookMarkedBlog) {
        bookMarkList.push(bookMarkedBlog);
      }
    });

    setBookMarks(bookMarkList);
  }, [blogs]);

  const handleBookMark = (blog) => {
    setReadingTime(readingTime + blog.reading_time);
    setBookMarks([...bookMarks, blog]);
  };

  const handleMarkAsRead = (blogId) => {
    const filteredBookMarks = bookMarks.filter(
      (bookmark) => bookmark.id !== blogId
    );
    setBookMarks(filteredBookMarks);
    deleteFromLocalStorage(blogId);
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
