import React, { Suspense } from "react";
import Blogs from "../Blogs/Blogs";

const BlogsContainer = () => {
  return (
    <Suspense
      fallback={
        <div className="text-center py-[50px]">
          <span className="loading loading-spinner loading-xl text-primary"></span>
        </div>
      }
    >
      <Blogs />
    </Suspense>
  );
};

export default BlogsContainer;
