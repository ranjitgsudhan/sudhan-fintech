"use client";

import { useEffect, useRef, useState } from "react";
import { getOnboardData, OnboardingStep } from "@/constants/onboarding";
import { motion } from "framer-motion";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";
import { useInView } from "framer-motion";

const Award = () => {
  const [onBoardingData, setOnBoardingData] = useState<OnboardingStep[]>([]);
  
  // Ref and inView detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    setOnBoardingData(getOnboardData());
  }, []);

  return (
    <section id="achievements" className="md:pt-20 sm:pt-24 pt-12 relative z-1">
      <div className="w-full px-4">
        <div
          ref={sectionRef}
          className="bg-section bg-opacity-10 px-10 py-12 rounded-3xl border-2 border-opacity-20 border-section relative overflow-hidden "
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-bold text-center sm:text-40 text-30 mb-10"
          >
            Magic Of Recognition
          </motion.h2>

          {/* Flex Row: Text & Image */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 w-full px-2"
            >
              <h3 className="text-[22px] font-bold mb-4 text-center lg:text-left">
                Golden Keys and Open Doors — The Magic Of Recognition
              </h3>
              <h1 className="font-medium lg:text-[38px] md:text-[34px] text-[30px] text-sudhan lg:text-left text-center">
                Best Management Award From{" "}
                <span className="font-bold text-white block lg:inline">
                  Samata Nagari Sahkari Pat Sanstha Ltd.
                </span>
              </h1>
            </motion.div>

            {/* Image Block */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-1/2 w-full flex justify-center"
            >
              <Image
                src={`${getImagePrefix()}images/work/award.png`}
                alt="award"
                width={300}
                height={325}
                className="max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
