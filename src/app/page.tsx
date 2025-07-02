import React from "react";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";
import Onboard from "@/components/Home/Onboarding";
import Award from "@/components/Home/award";
import AboutUs from "@/AboutUs/AboutUs";
import Neo from "@/components/OurWork/Neo";
import GapAnalysis from "@/components/OurWork/GapAnalysis";

export const metadata: Metadata = {
  title: "Sudhan Fintech",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
       <Neo />
       <GapAnalysis />
      <Award />
      <Onboard />
    </main>
  );
}
