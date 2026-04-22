import React, { useEffect, useRef, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";

const AUTO_SLIDE_DELAY = 5000;

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  // ===== GROUP INTO 2 PER SLIDE =====
  const groupedProjects = [];
  for (let i = 0; i < projectsData.length; i += 2) {
    groupedProjects.push(projectsData.slice(i, i + 2));
  }

  // Handle odd number (duplicate first item)
  if (projectsData.length % 2 !== 0) {
    groupedProjects[groupedProjects.length - 1].push(projectsData[0]);
  }

  // Clone for infinite loop
  const extendedGroups = [
    groupedProjects[groupedProjects.length - 1],
    ...groupedProjects,
    groupedProjects[0],
  ];

  // ===== AUTO SLIDE =====
  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, AUTO_SLIDE_DELAY);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resetAutoSlide = () => {
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // ===== NAVIGATION =====
  const nextProject = () => {
    setCurrentIndex((prev) => prev + 1);
    resetAutoSlide();
  };

  const prevProject = () => {
    setCurrentIndex((prev) => prev - 1);
    resetAutoSlide();
  };

  // ===== LOOP FIX =====
  useEffect(() => {
    if (currentIndex === extendedGroups.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedGroups.length - 2);
      }, 500);
    }
  }, [currentIndex, extendedGroups.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const t = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(t);
    }
  }, [isTransitioning]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Our Projects
      </h1>

      {/* Buttons */}
      <div className="flex justify-end mb-4">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
        >
          <img src={assets.left_arrow} alt="prev" />
        </button>
        <button onClick={nextProject} className="p-3 bg-gray-200 rounded">
          <img src={assets.right_arrow} alt="next" />
        </button>
      </div>

      {/* Carousel */}
      <div
        className="overflow-hidden"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning
              ? "transform 0.5s ease-in-out"
              : "none",
          }}
        >
          {extendedGroups.map((group, i) => (
            <div key={i} className="flex w-full flex-shrink-0 gap-4">
              {group.map((project, index) => (
                <div key={index} className="w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full lg:h-120 2xl:h-150 object-cover"
                  />
                  <div className="bg-white shadow-md mt-2 p-2 text-center min-h-22">
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="text-sm text-gray-500">
                    {project.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;