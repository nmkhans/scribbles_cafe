import React, { Suspense } from "react";
import Blogs from "../Blogs/Blogs";
import Spinner from "../Spinner/Spinner";

const BlogsContainer = ({ bookMarks, handleBookMark }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Blogs bookMarks={bookMarks} handleBookMark={handleBookMark} />
    </Suspense>
  );
};

export default BlogsContainer;
