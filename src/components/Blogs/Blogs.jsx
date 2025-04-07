import React, { use } from "react";
import { getBlogs } from "../../fetchers/getBlogs";
import Blog from "../Blog/Blog";

const blogsPromise = getBlogs();

const Blogs = ({ bookMarks, handleBookMark }) => {
  const blogs = use(blogsPromise);

  return (
    <article className="basis-[70%]">
      <div className="space-y-5">
        {blogs.map((blog) => (
          <Blog
            key={`blog-${blog.id}`}
            blog={blog}
            bookMarks={bookMarks}
            handleBookMark={handleBookMark}
          />
        ))}
      </div>
    </article>
  );
};

export default Blogs;
