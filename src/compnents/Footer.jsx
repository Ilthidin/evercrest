import React, { useState } from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) return;

    console.log(email); // replace with API call

    setEmail(""); // clear input
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left */}
        <div className="w-full md:h-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4 md:w-1/2 text-justify">
            Building trust through thoughtfully designed homes and strategic
            developments. We specialize in delivering high-quality residential
            and investment properties that combine modern design, functional
            living spaces, and prime locations. Every project is carefully
            planned to ensure long-term value, comfort, and a strong sense of
            place for its residents.
          </p>
        </div>

        {/* Middle */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li
              onClick={() => scrollToSection("Header")}
              className="hover:text-white cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("About")}
              className="hover:text-white cursor-pointer"
            >
              About Us
            </li>
            <li
              onClick={() => scrollToSection("Contact")}
              className="hover:text-white cursor-pointer"
            >
              Contact Us
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-l bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full"
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright {new Date().getFullYear()} Solidev. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
