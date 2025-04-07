function getFromLocalStorage() {
  const bookMarks =
    JSON.parse(localStorage.getItem("bookMarks")) || [];

  return bookMarks;
}

function saveToLocalStorage(id) {
  const bookMarks = getFromLocalStorage();

  if (!bookMarks.includes(id)) {
    const updatedBookMarks = [...bookMarks, id];

    localStorage.setItem(
      "bookMarks",
      JSON.stringify(updatedBookMarks)
    );
  } else {
    alert("Blog already bookmarked");
  }
}

function deleteFromLocalStorage(id) {
  const bookMarks = getFromLocalStorage();

  const filteredBookMarks = bookMarks.filter(
    (bookMarkId) => bookMarkId !== id
  );

  localStorage.setItem(
    "bookMarks",
    JSON.stringify(filteredBookMarks)
  );
}

export {
  getFromLocalStorage,
  saveToLocalStorage,
  deleteFromLocalStorage,
};
