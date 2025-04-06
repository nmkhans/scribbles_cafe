import React, { use } from "react";
import { getBlogs } from "../../fetchers/getBlogs";

const blogsPromise = getBlogs();

const Blogs = () => {
  const blogs = use(blogsPromise);
  console.log(blogs);

  return (
    <main className="py-[50px]">
      <div className="container mx-auto">blogs here {blogs.length}</div>
    </main>
  );
};

export default Blogs;
