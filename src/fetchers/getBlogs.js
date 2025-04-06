const getBlogs = async () => {
  const res = await fetch("blogs.json");
  return res.json();
};

export { getBlogs };
