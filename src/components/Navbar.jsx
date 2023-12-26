import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <header className="px-2">
      <nav className="max-w-[1300px] h-16 text-white bg-[#131315] mx-auto mt-5 px-2 pl-6 rounded-full flex justify-between items-center">
        <a href="#" className="font-bold">
          aliSajad.
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-semibold text-[#8A8A93] mr-10">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            Works
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </ul>

        {/* Mobile Menu */}
        <MobileMenu isMenuActive={isMenuActive} />

        {/* Burger Menu */}
        <BurgerMenu
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        />
      </nav>
    </header>
  );
};

export default Navbar;
