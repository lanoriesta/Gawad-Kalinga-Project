import React from "react";

const MainKeyVisualSection = () => {
  return (
    <div className="bg-[image:var(--main-bg)] bg-center md:bg-top lg:bg-center bg-cover bg-no-repeat h-150 md:h-180">
      <div className=" h-full max-w-[var(--main-w-container)] p-4 mx-auto pt-[var(--main-padding-top)] md:pt-[180px]">
        <div className=" text-center flex flex-col justify-center items-center">
          <h2 className="text-white/70 font-light tracking-wider py-3">
            ABOUT US
          </h2>
          <div className="h-100 md:h-110 md:w-[500px]  flex flex-col justify-between items-stretch">
            <h1 className="text-white text-[1.5rem] drop-shadow-md">
              A Future Full of Hope
            </h1>
            <p className="text-white/70 text-pretty">
              <span className="text-white">GK1 World Foundation</span>,
              collectively known as{" "}
              <span className="text-white">Gawad Kalinga USA</span> is the lead
              partner organization of the Gawad Kalinga Global Community and its
              mission partners in creating a sustainable template to end
              poverty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainKeyVisualSection;
