import React, { use } from "react";
import { getBlogs } from "../../fetchers/getBlogs";
import Blog from "../Blog/Blog";

const blogsPromise = getBlogs();

const Blogs = () => {
  const blogs = use(blogsPromise);

  return (
    <article className="basis-[70%]">
      <div className="space-y-5">
        {blogs.map((blog) => (
          <Blog key={`blog-${blog.id}`} blog={blog} />
        ))}
      </div>
    </article>
  );
};

export default Blogs;
