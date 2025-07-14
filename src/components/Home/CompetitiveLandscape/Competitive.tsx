import React from 'react'
import { Check, X } from "lucide-react";
import { data, headers } from '../../../constants/landscape'
const Competitive = () => {
  return (
     <section className="bg-darkmode text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-10">Competitive Landscape</h2>
        <div className="overflow-auto">
          <table className="min-w-full border-collapse text-center">
            <thead>
              <tr className="bg-amber-500 text-white text-lg">
                <th className="py-3 px-4 border border-black">Parameter</th>
                {headers.map((header, i) => (
                  <th key={i} className="py-3 px-4 border border-black">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-t border-gray-600">
                  <td className="py-3 px-4 border border-gray-600 font-medium text-left">{row.parameter}</td>
                  {row.values.map((val, j) => (
                    <td key={j} className="py-3 px-4 border border-gray-600">
                      {val ? (
                      <Check className="text-green-500 w-6 h-6 mx-auto" />
                      ) : (
                        <span className="text-red-500 text-2xl">✘</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Competitive