"use client";
import { motion } from 'framer-motion';
import React from 'react'

const gapAnalysisData = [
  {
    
    description: "Higher ROI by local money lenders & NBFC's and higher TAT's by Bank provides us opportunity to sort out both the issues at a glance.",
  },
  {
   
    description: "InDepth Knowledge of credit Cooperative Societies ensuring accurate access to market and borrower progiles inn rural and semi-urban markets in india."
  },
  {
   
    description: "Sudhan is working towards Multi-Lender Gold Loan Platform."
  }
];

const GapAnalysis = () => {
  return (
    <section id="work">
      <div className="bg-darkmode flex flex-col justify-center items-center pt-5 border-b-2 py-10 border-[#FEC637] border-t-2 w-full">
        <h1 className="md:text-30 text-28 text-white font-bold py-10">Solution Gap Analysis</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
          {gapAnalysisData.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              key={index}
              className="bg-[#FEC637] text-black rounded-2xl shadow-md md:p-12 p-5 w-[80vw] md:w-[30vw] h-[30vh] flex flex-col justify-center text-justify"
            >
              <p className="text-center md:text-lg text-xl font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GapAnalysis