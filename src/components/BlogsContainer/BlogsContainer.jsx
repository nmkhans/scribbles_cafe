import React, { Suspense } from "react";
import Blogs from "../Blogs/Blogs";
import Spinner from "../Spinner/Spinner";

const BlogsContainer = ({
  bookMarks,
  handleBookMark,
  handleMarkAsRead,
}) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Blogs
        bookMarks={bookMarks}
        handleBookMark={handleBookMark}
        handleMarkAsRead={handleMarkAsRead}
      />
    </Suspense>
  );
};

export default BlogsContainer;
