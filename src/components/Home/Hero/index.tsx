"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CardSlider from "./slider";
import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/utils";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
   <section
  className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
  id="main-banner"
>
  {/* Background Image */}
  <Image
    className="absolute inset-0 w-full h-full object-cover -z-10"
    src={`${getImagePrefix()}images/hero/gold1.jpg`}
    alt="Banner"
    fill
  />

  <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
    <div className="grid grid-cols-12">
      <motion.div {...leftAnimation} className="lg:col-span-5 col-span-12">
        <div className="flex gap-2 items-center lg:justify-start justify-center mb-5 mt-12">
          <Image
            src={`${getImagePrefix()}images/icons/icon-bag.svg`}
            alt="icon"
            width={40}
            height={40}
          />
          <p className="text-white sm:text-28 text-18 mb-0 font-semibold">
            Sudhan Fintech <span className="text-primary">Pvt.Ltd</span>
          </p>
        </div>
        <div className="bg-[#841618] p-6 rounded-lg shadow-lg px-10 w-[45vw]">
        <h1 className="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-10 opacity-100 ">
          A Product By <span className="text-primary">SudhanFintech </span>Pvt.Ltd
        </h1>
        </div>
      </motion.div>
    </div>
  </div>

  <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
</section>

  );
};

export default Hero;
