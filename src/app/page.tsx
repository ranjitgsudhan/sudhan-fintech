import React from "react";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";

import Onboard from "@/components/Home/Onboarding";
import Award from "@/components/Home/award";

import AboutUs from "@/AboutUs/AboutUs";

export const metadata: Metadata = {
  title: "Sudhan Fintech",
};

export default function Home() {
  return (
    <main>
    
      <Hero />

       <Award/>
      <Onboard/>
      <AboutUs/>
    </main>
  );
}
