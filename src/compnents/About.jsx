import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opcity: 0, x: 200 }}
      transition={{ duration: 2 }}
      whileInView={{ opcity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate about properties, dedicated to your vision
      </p>
      <img
        src={assets.brand_img}
        alt="About Image"
        className="hidden md:block lg:hidden w-3/4"
      />
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="About Image"
          className="block md:hidden lg:block w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 md:text-center lg:text-left w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experiences</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg text-justify">
            We are committed to delivering high-quality real estate solutions
            that combine strategic locations, modern design, and long-term
            value. Our focus is on creating residential and investment
            properties that meet the evolving needs of today’s buyers while
            maintaining strong potential for future growth. With a deep
            understanding of the market, we carefully select and develop
            properties that offer both comfort and practicality. Every project
            is planned with attention to detail—from layout and construction
            quality to accessibility and surrounding infrastructure. We believe
            that real estate is more than just property—it’s about building
            spaces where people live, grow, and invest with confidence.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
