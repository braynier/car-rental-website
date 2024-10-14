"use client";

import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Copyright from "./Copyright";

function Footer() {
  return (
    <footer className="z-20 bg-white pt-20" id="contact">
      <div className="container mx-auto mb-24">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col gap-x-5 gap-y-14 lg:flex-row lg:justify-between"
        >
          <div className="flex flex-1 flex-col gap-y-8">
            <Link to="home" smooth={true} spy={true} className="cursor-pointer">
              <Image
                src={"/icons/logo.svg"}
                width={200}
                height={200}
                alt="Logo"
              />
            </Link>
            <div className="text-secondary">
              Ready to roll? Download our app and enjoy fast, easy car rentals
              wherever the road takes you!
            </div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(111) 456-98774</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div>cars@yahoo.com</div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col xl:items-center">
            <div>
              <h3 className="h3 mb-8 font-bold">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">New York</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 mb-8 font-bold">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri:</div>
                <div className="font-semibold">09:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat:</div>
                <div className="font-semibold">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 mb-8 font-bold">Newsletter</h3>
            <div>
              <div className="mb-9 text-secondary">
                Subscribe to our newsletter for special offers and promotions.
              </div>
              <form className="flex h-14 gap-x-2">
                <input
                  type="text"
                  placeholder="Your email"
                  className="h-full rounded-lg border bg-white pl-4 outline-none focus:border-accent"
                />
                <button type="submit" className="btn btn-sm btn-accent w-24">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
