"use client";
import { motion } from 'framer-motion';
import React from 'react';

const neo = [
  {
    heading: "About Neo Landing Platform",
    description: "A platform that provides a comprehensive suite of services for managing and optimizing financial operations."
  },
  {
    heading: "Benefits and impact of Neo Landing Platform",
    description: "A platform that provides a comprehensive suite of services for managing and optimizing financial operations."
  }
];

const Neo = () => {
  return (
    <section id="work">
      <div className=" bg-darkmode flex flex-col justify-center items-center pt-5 border-b-2 py-10 border-[#FEC637] border-t-2 w-full">
        <h1 className="md:text-30 text-28 text-white text-center font-bold py-10">Neo Landing Platform</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
          {neo.map((item, index) => (
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            key={index}
            className="bg-[#FEC637] text-black rounded-2xl shadow-md p-10 w-[80vw] md:w-[30vw] h-[30vh] flex flex-col justify-center text-justify"
          >
            <h1 className="text-2xl font-semibold text-center mb-4">
              {item.heading}
            </h1>
            <p className="md:text-center md:text-lg text-xl font-medium">
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
