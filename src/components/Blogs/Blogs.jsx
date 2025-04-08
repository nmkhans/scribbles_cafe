import React, { use, useContext } from "react";
import { getBlogs } from "../../fetchers/getBlogs";
import Blog from "../Blog/Blog";
import { SearchContext } from "../../context/SearchProvider";

const blogsPromise = getBlogs();

const Blogs = ({ bookMarks, handleBookMark, handleMarkAsRead }) => {
  let blogs = use(blogsPromise);
  const { search } = useContext(SearchContext);

  blogs = blogs.filter((blog) => {
    if (blog.title.toLowerCase().includes(search)) {
      return true;
    }
  });

  return (
    <article className="basis-[70%]">
      <div className="space-y-5">
        {blogs.map((blog) => (
          <Blog
            key={`blog-${blog.id}`}
            blog={blog}
            bookMarks={bookMarks}
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          />
        ))}
      </div>
    </article>
  );
};

export default Blogs;
