"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Kailash Namdeo Kabade",
    title: "Founder",
    image: "/images/AboutUs/founder1.png",
    desc: (
      <>
        To stabilize the co-operative movement <br />
        and generate employment in rural areas, <br />
        Sudhan Fintech Pvt Ltd was started.
      </>
    ),
  },
  {
    name: "Gauri Kailash Kabade",
    title: "Founder",
    image: "/images/AboutUs/founder2.png",
    desc: "Housewife turned entrepreneur.",
  },
];

const AboutUs = () => {
  return (
    <section
      id="AboutUs"
      className="flex justify-center items-center w-full h-full pt-12 pb-2 bg-[#0d0d0d]"
    >
      <div className="flex flex-col justify-center items-center gap-6 w-full py-16 border-t-2 border-primary px-4">
        {/* Title */}
        <p className="text-center text-3xl text-white mt-5 font-bold py-6">
          Sudhan Team
        </p>

        {/* Team Cards - Centered & Wrapped */}
        <div className="flex flex-wrap justify-center gap-10 w-full max-w-[1000px]">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="bg-[#1f1f1f] w-[300px] h-[450px] p-6 rounded-xl text-center shadow-md flex flex-col items-center justify-start"
            >
              {/* Image */}
              <Image
                src={founder.image}
                alt={founder.name}
                width={200}
                height={200}
                className="rounded-xl object-cover"
              />

              {/* Text Content */}
              <div className="mt-4 w-full flex flex-col items-center justify-between flex-1">
                <div>
                  <h2 className="text-xl font-bold text-white text-center break-words">
                    {founder.name}
                  </h2>
                  <p className="text-sm text-gray-300 font-medium mt-1">
                    {founder.title}
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-4 leading-relaxed text-center">
                  {typeof founder.desc === "string"
                    ? founder.desc
                    : founder.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
