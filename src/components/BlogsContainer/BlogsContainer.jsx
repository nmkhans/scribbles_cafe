import React, { Suspense } from "react";
import Blogs from "../Blogs/Blogs";
import Spinner from "../Spinner/Spinner";

const BlogsContainer = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Blogs />
    </Suspense>
  );
};

export default BlogsContainer;
