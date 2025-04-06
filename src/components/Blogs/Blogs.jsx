import React, { use } from "react";
import { getBlogs } from "../../fetchers/getBlogs";

const blogsPromise = getBlogs();

const Blogs = () => {
  const blogs = use(blogsPromise);
  console.log(blogs);

  return (
    <article className="basis-[70%]">
      <div className="">blogs here {blogs.length}</div>
    </article>
  );
};

export default Blogs;
