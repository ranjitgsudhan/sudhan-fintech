"use client";
import { motion } from "framer-motion";
import React from "react";

const neo = [
  {
    heading: "About Neo Landing Platform",
    description:
      "A platform that provides a comprehensive suite of services for managing and optimizing financial operations.",
  },
  {
    heading: "Benefits and impact of Neo Landing Platform",
    description:
      "A platform that provides a comprehensive suite of services for managing and optimizing financial operations.",
  },
];

const Neo = () => {
  return (
    <section id="work">
      <div className="bg-darkmode flex flex-col justify-center items-center pt-5 border-b-2 py-10 border-[#FEC637] border-t-2 w-full">
        <h1 className="md:text-3xl text-2xl text-white text-center font-bold py-10">
          Neo Landing Platform
        </h1>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 p-6 w-full md:px-20">
          {neo.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              key={index}
              className="bg-[#FEC637] text-black rounded-2xl shadow-md p-6  md:max-w-[400px] w-full flex flex-col items-center justify-start min-h-[280px]"
            >
              <h1 className="text-xl md:text-2xl font-semibold text-center mb-6">
                {item.heading}
              </h1>
              <p className="text-base md:text-lg font-medium text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Neo;
