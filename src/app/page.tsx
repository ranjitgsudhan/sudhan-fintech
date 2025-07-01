import React from "react";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";
import AboutUs from "@/AboutUs/AboutUs";
export const metadata: Metadata = {
  title: "Sudhan Fintech",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs/>
    </main>
  );
}
