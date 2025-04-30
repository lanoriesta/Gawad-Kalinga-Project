import React from "react";
import eventOneThumbnail from "../assets/images/Events-thumbnail-1.png";
import eventTwoThumbnail from "../assets/images/Events-thumbnail-2.png";
import eventThreeThumbnail from "../assets/images/Events-thumbnail-3.png";

const EventsSection = () => {
  return (
    <div className="max-w-[var(--main-w-container)] mx-auto p-4">
      <div className="text-center py-5 flex flex-col gap-5">
        <h2 className="tracking-wider text-black/50">RECENT EVENTS</h2>
        <h3 className="text-[2rem] text-[var(--color-yellow)]">Events</h3>
        <p className="text-pretty text-black/50">
          Our events have gone virtual! Have fun, and stay safe, while doing
          good! Here are upcoming local and national GK USA events in your area.
          Scroll down to see what's happening virtually and in your area.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 pb-10">
        <div className="flex flex-col gap-5 bg-[var(--color-blue)] rounded-sm">
          <img
            src={eventOneThumbnail}
            alt="Event 1"
            className=" rounded-t-md"
          />
          <div className="px-5 pb-5 flex flex-col gap-1 text-white">
            <h2 className="text-[1.5rem]">EVENT ONE</h2>
            <p className="opacity-60 text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="pt-5">Jan 2 2022 | Philippines</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 bg-[var(--color-blue)] rounded-sm">
          <img
            src={eventTwoThumbnail}
            alt="Event 2"
            className=" rounded-t-md"
          />
          <div className="px-5 pb-5 flex flex-col gap-1 text-white">
            <h2 className="text-[1.5rem]">EVENT TWO</h2>
            <p className="opacity-60 text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="pt-5">Jan 2 2022 | Philippines</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 bg-[var(--color-blue)] rounded-sm">
          <img
            src={eventThreeThumbnail}
            alt="Event 3"
            className=" rounded-t-md"
          />
          <div className="px-5 pb-5 flex flex-col gap-1 text-white">
            <h2 className="text-[1.5rem]">EVENT THREE</h2>
            <p className="opacity-60 text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="pt-5">Jan 2 2022 | Philippines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
