import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
   <footer className="pt-12 bg-[#841618]">
  <div className="container mx-auto lg:max-w-screen-2xl md:max-w-screen-md">
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 pb-5">
      <div className="sm:col-span-2 col-span-6">
        <Logo />
        <div className="flex gap-6 items-center mt-4">
          <Link href="#" className="group">
            <Icon icon="fa6-brands:facebook-f" width="24" height="24" className="text-white group-hover:text-primary" />
          </Link>
          <Link href="#" className="group">
            <Icon icon="fa6-brands:instagram" width="24" height="24" className="text-white group-hover:text-primary" />
          </Link>
          <Link href="#" className="group">
            <Icon icon="fa6-brands:x-twitter" width="24" height="24" className="text-white group-hover:text-primary" />
          </Link>
        </div>
      </div>
      <div className="sm:col-span-1 col-span-6">
        <h4 className="text-white mb-4 font-medium text-24">Links</h4>
        <ul>
          {headerData.map((item, index) => (
            <li key={index} className="pb-2">
              <Link href={item.href} className="text-white hover:text-primary text-17">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:col-span-1 col-span-6">
        <h4 className="text-white mb-4 font-medium text-24">About us</h4>
        <p className="text-gray-50 text-opacity-60 text-16 mt-3">
          Founded in 2021, Sudhan is a new-age financial institution that offers gold loans to those in need, specifically in villages and tier-III cities, in association with the extensive network of credit societies across many states.
        </p>
      </div>
      <div className="sm:col-span-2 col-span-6">
        <h3 className="text-white text-24 font-medium">Contact us</h3>
        <p className="text-muted text-opacity-60 text-16 mt-3">
          SUDHAN-FINTECH PRIVATE LIMITED Registered address - Pasharwar Samaj Temple, Shop No 201, Second Floor, C S NO 1916/14, Plot No. 3, Sakhare Complex, Near Bamul Tower, Kopargaon, Ahmednagar, Maharashtra, 423601 +91 9823807272 +91 7340067400 info@sudhan.co.in
        </p>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
