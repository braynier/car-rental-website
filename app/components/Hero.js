"use client";

import Image from "next/image";
import Search from "./Search";
import { useSearch } from "../context/searchContext";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/variants";

function Hero() {
  const { searchActive } = useSearch();

  return (
    <section className="h-screen bg-[#b2b7c2]/10 xl:h-[90vh]" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex h-full flex-col items-center justify-center xl:flex-row xl:justify-start">
          <div className="mt-16 text-center xl:mt-0 xl:max-w-xl xl:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.6 }}
              className="h1"
            >
              Explore the finest <span className="text-accent">Global </span>
              offers
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.6 }}
              className="description mx-auto mb-6 max-w-[550px] xl:mx-0 xl:mb-10"
            >
              Find your ideal ride for any trip with our diverse range of
              affordable and dependable car rentals
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
              className="flex justify-center gap-x-3 xl:justify-start"
            >
              <button className="btn-cta">
                <Image
                  src={"icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt="Google Play Store Logo"
                />
              </button>
              <button className="btn-cta">
                <Image
                  src={"icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt=" Apple  Store Logo"
                />
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="xl:top-58 relative h-full max-h-[50vh] w-full md:max-w-[70vw] xl:absolute xl:-right-[100px] xl:max-h-[542px] xl:max-w-[860px] min-[1680px]:right-[120px]"
          >
            <Image
              src={"/images/hero/car.svg"}
              fill
              style={{ objectFit: "contain" }}
              priority
              alt="An image of a red Volkswagen in the introductionary section"
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          viewport={{ once: true, amount: 0.6 }}
          className="fixed top-[80px] z-10 w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="mx-auto -mt-12 w-full max-w-[1300px]">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Hero;
