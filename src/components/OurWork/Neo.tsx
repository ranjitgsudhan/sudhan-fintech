import React from 'react';

const neo = [
  {
    heading: "About Neo Landing Platform",
    description: "A platform that provides a comprehensive suite of services for managing and optimizing financial operations."
  },
  {
    heading: "Benefits and impact of Neo Landing Platform",
    description: "A platform that provides a comprehensive suite of services for managing and optimizing financial operations."
  }
];

const Neo = () => {
  return (
    <section id="work">
      <div className=" bg-darkmode flex flex-col justify-center items-center pt-5 border-b-2 py-10 border-[#FEC637] border-t-2 border-opacity-20">
        <h1 className="text-30 font-bold">Solution Neo Landing Platform</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
          {neo.map((item, index) => (
            <div
            key={index}
            className="bg-[#FEC637] text-black rounded-2xl shadow-md p-12 w-[80vw] md:w-[30vw] h-[30vh] flex flex-col justify-center text-justify"
          >
            <h1 className="text-2xl font-semibold text-center mb-4">
              {item.heading}
            </h1>
            <p className="text-center text-lg font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
     </section>
  );
};

export default Neo;
