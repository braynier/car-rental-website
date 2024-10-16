"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

function Cta() {
  return (
    <section
      className="flex items-end overflow-hidden bg-[#b2b7c2]/10 pb-0 pt-24 xl:pt-48"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          <div className="mb-12 flex-1 text-center md:mb-0 md:text-left xl:ml-24">
            <div className="order-2 mx-auto max-w-[520px] xl:order-none">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="h2"
              >
                Download our App now and hit the road with ease
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="mb-10"
              >
                Whether you&apos;re planning a weekend getaway, a business trip,
                or just need a reliable vehicle for the day, our app makes it
                simple to find the perfect rental car. With just a few taps, you
                can browse a wide selection of vehicles, choose the one that
                fits your needs, and book it instantly.
              </motion.p>
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="flex justify-center gap-x-3 md:justify-start"
              >
                <button className="btn-cta">
                  <Image
                    src={"/icons/buttons/google-play.svg"}
                    width={132}
                    height={36}
                    alt="Button to the Google App Store"
                  />
                </button>
                <button className="btn-cta">
                  <Image
                    src={"/icons/buttons/app-store.svg"}
                    width={132}
                    height={36}
                    alt="Button to the Apple Store"
                  />
                </button>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="order-1 flex flex-1 justify-center md:order-none"
          >
            <Image
              src={"/images/cta/phone_cta.png"}
              width={320}
              height={640}
              alt="Call to action message"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
