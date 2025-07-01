"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="flex justify-center items-center px-4 sm:px-6 w-full">
      <div className="min-h-screen  text-white py-12 px-4">
        {/* Title */}
        <p className="text-center text-30 font-bold mb-16 pt-10">Sudhan Team</p>

        {/* Team Cards */}
        <div className="flex flex-wrap justify-center gap-5 ">
          {/* Founder 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className=" p-6 rounded-xl text-center shadow-md"
          >
            <Image
              src="/images/AboutUs/founder1.png"
              alt="Kailash Namdeo Kabade"
              width={200}
              height={200}
              className="rounded-xl mx-auto"
            />
            <h2 className="text-xl font-bold mt-4 ">Kailash Namdeo Kabade</h2>
            <p className="text-sm text-gray-300 font-medium">Founder</p>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              To stabilize the co-operative movement and generate <br />
              employment in rural areas, Sudhan Fintech Pvt Ltd was started.
            </p>
          </motion.div>

          {/* Founder 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl text-center  shadow-md"
          >
            <Image
              src="/images/AboutUs/founder2.png"
              alt="Gauri Kailash Kabade"
              width={200}
              height={200}
              className="rounded-xl mx-auto"
            />
            <h2 className="text-xl font-bold mt-4 ">Gauri Kailash Kabade</h2>
            <p className="text-sm text-gray-300 font-medium">Founder</p>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Housewife turned entrepreneur.
            </p>
          </motion.div>
        </div>

        {/* Opportunity Section */}
        <div className="py-16">
          <h1 className="flex justify-center text-30 font-bold mb-16">
            Opportunity
          </h1>
          <div className="flex flex-wrap justify-center gap-10 md:w-full mx-auto">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white text-black w-65 rounded-xl p-4 shadow-lg"
            >
              <Image
                src="/images/AboutUs/opportunity1.png"
                alt="Gold Holdings"
                width={260}
                height={320}
                className="rounded-lg"
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-black w-65 rounded-xl p-4 shadow-lg"
            >
              <Image
                src="/images/AboutUs/opportunity2.png"
                alt="Share of AUM"
                width={260}
                height={320}
                className="rounded-lg"
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white text-black w-65 rounded-xl p-4 shadow-lg"
            >
              <Image
                src="/images/AboutUs/opportunity3.png"
                alt="NBFC Share"
                width={260}
                height={320}
                className="rounded-lg"
              />
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white text-black w-65 rounded-xl p-4 shadow-lg"
            >
              <Image
                src="/images/AboutUs/opportunity4.png"
                alt="Market Growth"
                width={260}
                height={320}
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="py-16 px-4 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-30 font-bold mb-16 mt-16">
            Problem Statement
          </p>

          {/* Flex Container for Text and Image */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
            {/* Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-30 font-semibold mb-4">
                WHY GOLD LOAN's ROI is more than 24%?
              </p>
            </div>

            {/* Image */}
            <motion.div
              className="lg:w-1/2 flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/AboutUs/ps.png"
                alt="Problem Statement"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
