import { de } from 'date-fns/locale';
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
    <div className="bg-darkmode flex flex-col justify-center items-center pt-5 border-b-2 py-10 border-[#FEC637] border-t-2 border-opacity-20">
      <h1 className="text-30 font-bold">Solution Gap Analysis</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
        {gapAnalysisData.map((item, index) => (
          <div
            key={index}
            className="bg-[#FEC637] text-black rounded-2xl shadow-md p-12 w-[80vw] md:w-[30vw] h-[30vh] flex flex-col justify-center text-justify"
          >
            <p className="text-center text-lg font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default GapAnalysis