import React from "react";

const Sidebar = ({ bookMarks, readingTime }) => {

  return (
    <aside className="basis-[30%]">
      <div className="bg-[#6047EC]/10 border border-[#6047EC] p-5 rounded-lg text-center mb-5">
        <h3 className="text-[#6047EC] font-bold text-lg ">
          Spent time on reading: {readingTime} min
        </h3>
      </div>
      <div className="bg-[#111111]/5 p-5 rounded-lg h-screen overflow-y-scroll">
        <div className="mb-4">
          <h3 className="text-[#111] font-bold text-lg">
            Bookmarked Blogs: {bookMarks.length}
          </h3>
        </div>
        <div>
          {bookMarks.map((bookmark, index) => {
            return (
              <div
                key={`bookmark-${index}`}
                className="bg-white p-4 rounded-lg mb-3"
              >
                <p className="font-semibold">{bookmark.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </aside>
  );
};

export default Sidebar;
