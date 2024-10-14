"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import {
  MdOutlineMapsHomeWork,
  MdOutlineDirectionsCar,
  MdOutlineDirectionsSubway,
  MdOutlineBuildCircle,
} from "react-icons/md";
import CountUp from "react-countup";
import { fadeIn } from "@/variants";

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="mb-8 flex-1 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src="/images/about/car01.png"
              width={600}
              height={448}
              alt="Picture of a red car"
            />
          </motion.div>
          <div className="flex flex-1 items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Car services simplified
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Rent choose, and repair with ease. Our convenient locations,
                diverse car types, and reliable repair points ensure a seamless
                car experience
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mb-12 flex items-center gap-x-8"
              >
                <div className="flex w-[100px] flex-col">
                  <MdOutlineDirectionsCar className="mb-2 text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {InView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="text-[13px] font-semibold uppercase text-secondary">
                    car <br /> types{" "}
                  </div>
                </div>

                <div className="flex w-[100px] flex-col">
                  <MdOutlineMapsHomeWork className="mb-2 text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {InView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="text-[13px] font-semibold uppercase text-secondary">
                    car <br /> outlets
                  </div>
                </div>

                <div className="flex w-[100px] flex-col">
                  <MdOutlineBuildCircle className="mb-2 text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {InView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="text-[13px] font-semibold uppercase text-secondary">
                    repair <br /> points
                  </div>
                </div>
              </motion.div>
              <motion.button
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden h-16 w-full max-w-[184px] rounded-[10px] bg-accent text-[13px] font-medium uppercase tracking-[2px] text-white hover:bg-accent-hover xl:block"
              >
                All cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
