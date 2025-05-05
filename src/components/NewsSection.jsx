import React from "react";

const NewsSection = () => {
  return (
    <div className="h-full max-w-[var(--main-w-container)] p-4 mx-auto">
      <div className="text-center  py-10">
        <h2 className="font-light tracking-wider py-3 text-black/50">NEWS</h2>
        <h3 className="text-[2rem] text-[var(--color-yellow)]">What's New</h3>
      </div>
      <div className=" bg-blend-multiply bg-[var(--color-yellow)]/50 bg-[image:var(--news-bg)] bg-center bg-cover text-center text-white py-20 rounded-sm shadow-md">
        <div className=" py-5 max-w-[500px] mx-auto rounded-sm">
          <h3 className="text-white/70 font-light tracking-wider">
            Project Highlight:
          </h3>
          <h3 className="text-[1.8rem] text-[var(--color-yellow)] text-pretty text-shadow-md">
            Disaster Relief
          </h3>
        </div>
        <p className="py-5 text-pretty text-shadow-md">
          Your contribution will help cover providing disaster relief packs ($15
          per pack) and shelter repairs ($595 per home).
        </p>
        <button className="bg-[var(--color-green)] hover:bg-[var(--color-yellow)] py-3 w-full rounded-sm max-w-[300px] cursor-pointer shadow-md transition-all duration-300 ease-in-out">
          TBD by GK USA
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
