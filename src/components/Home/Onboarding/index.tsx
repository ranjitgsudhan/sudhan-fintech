"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getOnboardData, OnboardingStep } from "@/constants/onboarding";
import { motion, useInView } from "framer-motion";
import Competitive from "../CompetitiveLandscape/Competitive";

const Onboard = () => {
  const [onBoardingData, setOnBoardingData] = useState<OnboardingStep[]>([]);
     const ref = useRef(null);
    const inView = useInView(ref);
  useEffect(() => {
    setOnBoardingData(getOnboardData());
  }, []);

  return (
    <section className="md:pt-10 sm:pt-24 pt-12 relative z-1">
      <div className="w-full px-4 pb-6">
        <div ref={ref} className="bg-section bg-opacity-10 md:px-16 p-8 rounded-3xl grid grid-cols-12 items-center gap-5 relative overflow-hidden ">
          <div className="lg:col-span-12 col-span-12">
            <h2 className="text-white lg:text-center md:text-30 text-24 mb-6">
              Customer <span className="text-sudhan">On-boarding</span> Journey
            </h2>
          </div>
          {onBoardingData &&
            onBoardingData.map((data, index) => (
              <motion.div
                key={data.step}
                initial={{ opacity: 0, y: 30 }}
                animate={ inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                
                className="lg:col-span-4 col-span-12"
              >
                
                <div className="flex lg:justify-end lg:mt-3 mt-7 justify-center gap-3">
                  <div className="w-full p-5 bg-section bg-opacity-80 rounded-xl min-h-[120px]">
                    <div className="flex justify-evenly items-center gap-4">
                      <div className="flex items-center justify-center">
                        <span className="text-white md:text-[24px] text-30 px-4 bg-sudhan rounded-full py-1 font-bold">
                          {data.step}
                        </span>
                      </div>
                      <div className="mx-2">
                        <p className="md:text-[18px] text-[21px] font-bold text-white mb-0 leading-none">
                          {data.journey}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
      {/* <Competitive /> */}
    </section>
  );
};

export default Onboard;
