import React from "react";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";
import "@/styles/globals.css";
import Award from "@/components/Home/award";
import AboutUs from "@/AboutUs/AboutUs";
import Neo from "@/components/OurWork/Neo";

import Milestone from "@/components/Home/milestone";

export const metadata: Metadata = {
  title: "Sudhan Fintech",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutUs />
      <Neo />
      <Award />
      <Milestone />
    </main>
  );
}
