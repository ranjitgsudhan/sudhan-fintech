"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getMileStoneData, MileStoneStructure } from "@/constants/milestone";

const Milestone = () => {
  const [mileStoneDetails, setMileStoneDetails] = useState<MileStoneStructure[]>([]);

  // Separate refs for each animated block
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: false, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: false, margin: "-100px" });

  useEffect(() => {
    setMileStoneDetails(getMileStoneData);
  }, []);

  return (
    <section className="pt-12 pb-12 md:pt-12 sm:pt-24 px-3 md:px-4 lg:px-6 relative z-1 ">
      <div className="w-full max-w-6xl mx-auto pt-6 shadow-lg rounded-2xl  border-section bg-opacity-10 p-10 ">
        <h1 className="lg:text-[42px] text-[39px] text-center mb-5 pb-5 ">Milestones</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT: Text Content with animation from left */}
          <motion.div
            ref={leftRef}
            className="text-white px-3"
            initial={{ x: -100, opacity: 0 }}
            animate={leftInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-[40px] text-sudhan font-bold mb-4">
              Turning Vision Into Value
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              From ₹0 in Dec 2022 to ₹525 Cr in Jun 2025 — a journey of trust,
              discipline, and consistent growth.
            </p>
            <p className="text-sm text-gray-400">
              Milestones achieved: ₹250 Cr (May 2023), ₹500 Cr (Mar 2025)
            </p>
          </motion.div>

          {/* RIGHT: Chart with animation from right */}
          <motion.div
            ref={rightRef}
            initial={{ x: 100, opacity: 0 }}
            animate={rightInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold text-sudhan mb-6 text-center ">
              AUM Growth Timeline
            </h2>
            <div className="h-[400px] bg-dark_grey shadow-lg rounded-2xl px-3 py-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mileStoneDetails}>
                  <CartesianGrid stroke="#444" strokeDasharray="3 3" />
                  <XAxis dataKey="date" stroke="#fff" />
                  <YAxis
                    stroke="#fff"
                    label={{
                      value: "AUM (₹ Cr)",
                      angle: -90,
                      position: "insideLeft",
                      fill: "#fff",
                    }}
                  />
                  <Tooltip
                    formatter={(value) => `₹ ${value} Cr.`}
                    labelStyle={{ fontWeight: "bold", color: "#fff" }}
                    contentStyle={{ backgroundColor: "#1f2937", borderColor: "#888" }}
                    itemStyle={{ color: "#facc15" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="aum"
                    stroke="#4f46e5"
                    strokeWidth={3}
                    dot={{ r: 5, stroke: "#facc15", strokeWidth: 2, fill: "#facc15" }}
                    activeDot={{ r: 6, fill: "#facc15", stroke: "#facc15" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Milestone;
