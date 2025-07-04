import React from "react";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";
import Onboard from "@/components/Home/Onboarding";
import Award from "@/components/Home/award";
import AboutUs from "@/AboutUs/AboutUs";
import Neo from "@/components/OurWork/Neo";
import GapAnalysis from "@/components/OurWork/GapAnalysis";
import Milestone from "@/components/Home/milestone";
import Competitive from "@/components/Home/CompetitiveLandscape/Competitive";

export const metadata: Metadata = {
  title: "Sudhan Fintech",
};

export default function Home() {
  return (
     <main className="overflow-hidden">
      <Hero />
      <AboutUs />
       <Neo />
       {/* <GapAnalysis /> */}
      <Award />
      {/* <Competitive /> */}
       <Milestone/>
      {/* <Onboard /> */}
    </main>
  );
}
