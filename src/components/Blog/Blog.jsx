import React from "react";

const Blog = ({ blog }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="card shadow-sm">
      <figure>
        <img src={cover} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-4">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={author_img} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">{author}</h3>
              <p className="text-[#111]/60">{posted_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <p className="text-[#111]/60">
              {reading_time} Minutes read
            </p>
            <button>book mark</button>
          </div>
        </div>
        <h2 className="card-title text-3xl font-bold my-3">
          {title}
        </h2>
        <div>
          {hashtags.map((tag, index) => {
            return (
              <span
                key={`tag-${index}`}
                className="text-[#111]/60 font-semibold me-2 inline-block"
              >
                #{tag}
              </span>
            );
          })}
          <button className="block text-[#6047EC] underline font-medium mt-2 text-base cursor-pointer">
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
