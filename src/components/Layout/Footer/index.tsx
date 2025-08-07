import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";

import { Icon } from "@iconify/react";
import FooterLogo from "./FooterLogo";

const Footer: FC = () => {
  return (
    <section id="Footer">
      <footer className="pt-12 bg-[#841618] flex justify-center items-start px-4">
        <div className="container mx-auto lg:max-w-screen-2xl md:max-w-screen-md">
          <div className="grid grid-cols-12 gap-6 pb-5">

            {/* Logo */}
            <div className="col-span-2 flex flex-col items-start">
              <div className="border border-primary w-fit">
                <FooterLogo />
              </div>
            </div>

            {/* Links */}
            <div className="col-span-2">
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

            {/* About us */}
            <div className="col-span-5">
              <h4 className="text-white mb-2 font-semibold text-xl sm:text-2xl">
                About us
              </h4>
              <p className="text-gray-50 text-opacity-70 text-base leading-relaxed">
                Sudhan is a new-age financial institution that offers gold loans to those in need, specifically in villages and tier-III cities, in association with the extensive network of credit societies across many states. Our mission is to bridge the credit gap in underserved regions by making financial services accessible, transparent, and affordable to all.
              </p>
            </div>

            {/* Contact us */}
            <div className="col-span-3">
              <h3 className="text-white text-24 font-medium mb-2">Contact us</h3>
              <p className="text-muted text-opacity-60 text-16 leading-relaxed">
                SUDHAN FINTECH PRIVATE LIMITED<br />
                A-9, Udyog Mauli, Dnyaneshwar Nagar,<br />
                Chhatrapati Sambhajinagar, Maharashtra, India, 431001<br />
                +91 8796306621
              </p>
            </div>

          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
