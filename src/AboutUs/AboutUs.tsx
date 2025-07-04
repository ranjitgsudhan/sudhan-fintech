"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="AboutUs"
      className="flex justify-center items-center w-full h-full pt-12"
    >
      <div className="flex justify-center items-center flex-col gap-6 mx-auto py-16 border-t-2 border-primary ">
        {/* Title */}
        <p className="text-center text-30 font-bold py-6">Sudhan Team</p>
        {/* Team Cards */}
        <div className="flex flex-wrap justify-center gap-5 w-full h-full">
          {/* Founder 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="h-[30rem] w-[20vw] p-6 rounded-xl text-center shadow-md bg-section bg-opacity-10"
          >
            <Image
              src="/images/AboutUs/founder1.png"
              alt="Kailash Namdeo Kabade"
              width={200}
              height={200}
              className="rounded-xl mx-auto"
            />
            <div className="text-center text-wrap max-w-md">
            <h2 className="text-xl font-bold mt-4">Kailash Namdeo Kabade</h2>
            <p className="text-sm text-gray-300 font-medium">Founder</p>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              To stabilize the co-operative movement and generate employment in
              rural areas, Sudhan Fintech Pvt Ltd was started.
            </p>
            </div>
          </motion.div>

          {/* Founder 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="h-[70vh] w-[30vw] p-6 rounded-xl text-center shadow-md bg-section bg-opacity-10"
          >
            <Image
              src="/images/AboutUs/founder2.png"
              alt="Gauri Kailash Kabade"
              width={200}
              height={200}
              className="rounded-xl mx-auto"
            />
            <div className="text-center w-[20vw]">
            <h2 className="text-xl font-bold mt-4">Gauri Kailash Kabade</h2>
            <p className="text-sm text-gray-300 font-medium">Founder</p>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Housewife turned entrepreneur.
            </p>
            </div>
          </motion.div>
        </div>

        {/* Opportunity Section */}
        

       
      </div>
    </section>
  );
};

export default AboutUs;
