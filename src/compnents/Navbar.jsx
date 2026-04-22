import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Contact from "./Contact";

const NAV_ITEMS = [
  { name: "Home", targetId: "Header" },
  { name: "About", targetId: "About" },
  { name: "Projects", targetId: "Projects" },
  { name: "Testimonials", targetId: "Testimonials" },
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Prevent scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setShowMobileMenu(false); // close mobile menu after click
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <img src={assets.logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-7 text-white">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.name}
              onClick={() => scrollToSection(item.targetId)}
              className="cursor-pointer hover:text-gray-400"
            >
              {item.name}
            </li>
          ))}
        </ul>

        <button className="hidden lg:block bg-white px-4 lg-px-8 py-1 lg:py-2 rounded-full cursor-pointer hover:bg-gray-400" onClick={() => scrollToSection('Contact')}>
          Contact Us
        </button>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="lg:hidden w-7 cursor-pointer"
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 bg-white transition-all ${
          showMobileMenu ? "w-full" : "w-0 overflow-hidden"
        }`}
      >
        <div className="flex justify-end p-6">
          <img
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="close"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>

        <ul className="flex flex-col items-center gap-4 mt-10 text-lg font-medium">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.name}
              onClick={() => scrollToSection(item.targetId)}
              className="px-4 py-2 rounded-full cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;