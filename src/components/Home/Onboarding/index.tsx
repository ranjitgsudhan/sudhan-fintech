"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getOnboardData, OnboardingStep } from "@/constants/onboarding";
import { motion, useInView } from "framer-motion";

const Onboard = () => {
  const [onBoardingData, setOnBoardingData] = useState<OnboardingStep[]>([]);
     const ref = useRef(null);
    const inView = useInView(ref);
  useEffect(() => {
    setOnBoardingData(getOnboardData());
  }, []);

  return (
    <section className="md:pt-44 sm:pt-24 pt-12 relative z-1">
      <div className="w-full px-4">
        <div ref={ref} className="bg-section bg-opacity-10 px-16 py-14 rounded-3xl border-2 border-opacity-20 border-section grid grid-cols-12 items-center relative overflow-hidden">
          <div className="lg:col-span-12 col-span-12">
            <h2 className="text-white lg:text-center sm:text-40 text-30 mb-6">
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
                  <div className="w-[96%] px-5 py-5 bg-dark_grey bg-opacity-80 rounded-xl min-h-[120px]">
                    <div className="flex justify-between my-3">
                      <div className="flex items-center justify-center">
                        <span className="text-white text-[24px] px-4 bg-sudhan rounded-full py-1 font-bold">
                          {data.step}
                        </span>
                      </div>
                      <div className="mx-4">
                        <p className="text-[18px] font-bold text-white mb-0 leading-none">
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
    </section>
  );
};

export default Onboard;
