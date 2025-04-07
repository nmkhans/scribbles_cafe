import React, { use } from "react";
import { getBlogs } from "../../fetchers/getBlogs";
import Blog from "../Blog/Blog";

const blogsPromise = getBlogs();

const Blogs = ({ bookMarks, handleBookMark, handleMarkAsRead }) => {
  const blogs = use(blogsPromise);

  return (
    <article className="grow-1">
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
