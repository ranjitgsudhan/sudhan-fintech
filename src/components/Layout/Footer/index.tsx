import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";
import FooterLogo from "./FooterLogo";

const Footer: FC = () => {
  return (
    <section id="Footer">
      <footer className="pt-12 bg-[#841618] flex justify-center items-center px-4">
        <div className="container mx-auto lg:max-w-screen-2xl md:max-w-screen-md">
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 pb-5">
            <div className="sm:col-span-2 col-span-6 flex flex-col items-center sm:items-start">
              <FooterLogo />
              <div className="flex gap-6 items-center mt-4">
                <Link href="#" className="group">
                  <Icon
                    icon="fa6-brands:facebook-f"
                    width="24"
                    height="24"
                    className="text-white group-hover:text-primary"
                  />
                </Link>
                <Link href="#" className="group">
                  <Icon
                    icon="fa6-brands:instagram"
                    width="24"
                    height="24"
                    className="text-white group-hover:text-primary"
                  />
                </Link>
                <Link href="#" className="group">
                  <Icon
                    icon="fa6-brands:x-twitter"
                    width="24"
                    height="24"
                    className="text-white group-hover:text-primary"
                  />
                </Link>
              </div>
            </div>
            <div className="sm:col-span-1 col-span-6">
              <h4 className="text-white mb-4 font-medium text-24">Links</h4>
              <ul>
                {headerData.map((item, index) => (
                  <li key={index} className="pb-2">
                    <Link
                      href={item.href}
                      className="text-white hover:text-primary text-17"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-1 col-span-6">
              <h4 className="text-white mb-4 font-medium text-24">About us</h4>
              <p className="text-gray-50 text-opacity-60 text-16 mt-3">
                Sudhan is a new-age financial institution that
                offers gold loans to those in need, specifically in villages and
                tier-III cities, in association with the extensive network of
                credit societies across many states.
              </p>
            </div>
            <div className="sm:col-span-2 col-span-6">
              <h3 className="text-white text-24 font-medium">Contact us</h3>
              <p className="text-muted text-opacity-60 text-16 mt-3">
                SUDHAN FINTECH PRIVATE LIMITED A-9, Udyog Mauli, Dnyaneshwar
                Nagar, Aurangabad, Aurangabad, Maharashtra, India, 431001
                +918796306621
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
