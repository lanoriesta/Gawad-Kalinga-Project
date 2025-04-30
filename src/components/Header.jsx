import React, { useState } from "react";
import imgLogo from "../assets/images/GK-USA-Logo.png";
import { Mail, Menu, Phone } from "lucide-react";
import SideNav from "./SideNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const [onScroll, setOnScroll] = useState(false);

  window.onscroll = (e) => {
    if (window.scrollY > 0) {
      setOnScroll(true);
    } else if (window.scrollY < 2) {
      setOnScroll(false);
    }
  };

  return (
    <div
      className={`fixed left-0 right-0 top-0 transition-all duration-300 transition-discrete ease-in-out z-5 ${
        onScroll ? "bg-[var(--color-orange)]" : "bg-transparent"
      }`}
    >
      <div className="grid grid-cols-3 items-center p-4 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-4 items-start ">
          <a
            className="flex gap-2 items-start p-2 rounded-sm w-content hover:bg-white/30 transition-all duration-300 ease-in-out"
            href="tel:+19494245872n"
          >
            <Phone color="white" className=" drop-shadow-sm" />
            <span className="hidden md:block text-white">(949) 424-5872</span>
          </a>
          <a
            className="flex gap-2 items-center p-2 rounded-sm w-content hover:bg-white/30 transition-all duration-300 ease-in-out"
            href="mailto:contaact@gk-usa.comn"
          >
            <Mail color="white" className=" drop-shadow-sm" />
            <span className="hidden md:block text-white">
              contaact@gk-usa.com
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <img src={imgLogo} alt="GK USA Org Logo" className="w-40" />
        </div>
        <div className="hidden md:flex flex-col justify-center gap-4 items-end text-white w-full">
          <button className=" cursor-pointer w-[100px] py-1 px-3  bg-white text-[var(--color-orange)] shadow-md rounded-sm hover:bg-white/80 transition-all duration-300 ease-in-out">
            Volunteer
          </button>
          <button className="cursor-popinter w-[100px] border py-1 px-3 shadow-md rounded-sm cursor-pointer hover:bg-white/20 transition-all duration-300 ease-in-out">
            Donate
          </button>
        </div>
        {/* SIDENAV */}
        <div className="md:hidden flex justify-end">
          <button className="cursor-pointer" onClick={() => toggleSideNav()}>
            <Menu color="white" className=" drop-shadow-sm" />
          </button>
        </div>
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="hidden md:flex justify-center pb-5">
        <ul className="flex gap-4 text-white drop-shadow-md">
          <li className="underline underline-offset-8 font-bold ">About Us</li>
          <li>Platforms</li>
          <li>Events</li>
          <li>Hope Stories</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
