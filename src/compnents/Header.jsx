import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";
import headerImg from "../assets/header_img.webp"; // if stored in src/assets

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${headerImg})` }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <button onClick={() => scrollToSection('Projects')} className="border border-white px-8 py-3 rounded cursor-pointer hover:bg-gray-600">
            Our Projects
          </button>
          <button onClick={() => scrollToSection('About')} className="bg-blue-600 px-8 py-3 rounded cursor-pointer hover:bg-blue-700">
            Explore Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
