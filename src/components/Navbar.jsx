import React, { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { navLinks } from "../data";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleClick = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <nav className="w-full bg-gray-800 p-3">
      <div className="max-w-[1000px] mx-auto flex justify-between items-center">
        <div className="border border-cyan-400 text-cyan-400 w-10 h-10 rounded-md flex justify-center items-center font-bold">
          <h3>AS</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="sm:flex hidden gap-5 text-gray-300">
          {navLinks.map((navLink, key) => {
            return (
              <li key={key}>
                <a href={navLink.link}>{navLink.name}</a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={
            mobileNav
              ? "absolute top-0 left-0 w-full h-screen bg-gray-900 text-white text-4xl flex flex-col gap-7 justify-center items-center"
              : "hidden"
          }
        >
          {navLinks.map((navLink, key) => {
            return (
              <li key={key}>
                <a href={navLink.link}>{navLink.name}</a>
              </li>
            );
          })}
        </ul>

        <button className="sm:hidden z-10 text-gray-200" onClick={handleClick}>
          {mobileNav ? (
            <VscClose className="text-4xl" />
          ) : (
            <VscMenu className="text-2xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
