import { X } from "lucide-react";
import React, { useEffect } from "react";

const SideNav = ({ isOpen = true, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <div
      className={` bg-[var(--color-green)]/80 backdrop-blur-sm w-full fixed h-screen flex flex-col justify-start items-end gap-5 transition-all duration-300 ease-in-out z-10 top-0 ${
        isOpen ? "right-0" : "-right-full"
      }`}
    >
      <div
        className={` bg-[var(--color-yellow)] w-[150px] h-screen py-6 px-5 flex flex-col justify-start items-end gap-5 transition-all duration-300 ease-in-out z-10 ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <div>
          <X
            color="white"
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex flex-col gap-y-4 items-center w-full text-white">
          <button className="w-full py-2 px-3 bg-[var(--color-green)] cursor-pointer">
            Donate
          </button>
          <button className="w-full py-2 px-3 border border-[var(--color-green)] cursor-pointer">
            Volunteer
          </button>
        </div>
        <ul className="text-white/80 flex flex-col gap-y-4 w-full">
          <li className="text-white font-bold underline underline-offset-5 decoration-[var(--color-green)]">
            About Us
          </li>
          <li>Platforms</li>
          <li>Events</li>
          <li>Hope Stories</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
