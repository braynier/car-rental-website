"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

function Why() {
  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Unmatched excellence and customer satisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mx-auto mb-2 max-w-[680px] text-center"
        >
          Our destination to providing exceptional services sets us apart from
          the competition. From the moment you engage with us, we strive to
          exceed your expectations in every interaction.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mb-6 hidden justify-center md:flex xl:mb-2"
        >
          <Image
            src="/images/why/car.svg"
            width={1060}
            height={420}
            alt="Image of a red car"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-wrap justify-center gap-4 xl:grid xl:grid-cols-3 xl:gap-x-[30px] xl:gap-y-0"
        >
          <div className="flex max-w-[160px] flex-col items-center p-2 text-center xl:max-w-none xl:p-0">
            <MdKey className="mb-4 text-[38px] text-accent" />
            <h3 className="h3">Rent simply and quickly</h3>
            <p className="hidden xl:flex">
              We prioritize your needs and we go an extra mile for your
              satisfactory experience
            </p>
          </div>
          <div>
            <div className="flex max-w-[160px] flex-col items-center p-2 text-center xl:max-w-none xl:p-0">
              <MdTrendingUp className="mb-4 text-[38px] text-accent" />
              <h3 className="h3">Modern & well maintained vehicles</h3>
              <p className="hidden xl:flex">
                We prioritize your needs and we go an extra mile for your
                satisfactory experience
              </p>
            </div>
          </div>
          <div>
            <div className="flex max-w-[160px] flex-col items-center p-2 text-center xl:max-w-none xl:p-0">
              <MdHandshake className="mb-4 text-[38px] text-accent" />
              <h3 className="h3">Prompt and flexible services</h3>
              <p className="hidden xl:flex">
                We prioritize your needs and we go an extra mile for your
                satisfactory experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Why;
