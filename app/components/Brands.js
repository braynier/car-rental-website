"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

function Brands() {
  return (
    <section className="flex flex-col justify-center bg-white xl:h-[200px] xl:pt-16">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.6 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-3 place-items-center gap-6 xl:flex xl:flex-wrap xl:justify-between xl:gap-x-6">
          <div>
            <Image
              src={"icons/brands/ford.svg"}
              width={85}
              height={32}
              alt="Official logo of Ford automobile manufacturer"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/audi.svg"}
              width={85}
              height={50}
              alt="Official logo of Audi automobile manufacturer"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/mercedes.svg"}
              width={60}
              height={60}
              alt="Official logo of Mercedes automobile manufacturer"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/bmw.svg"}
              width={60}
              height={60}
              alt="Official logo of BMW automobile manufacturer"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/vw.svg"}
              width={60}
              height={60}
              alt="Official logo of Volkswagen automobile manufacturer"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/skoda.svg"}
              width={60}
              height={60}
              alt="Official logo of Škoda automobile manufacturer"
            />
          </div>
          <div>
            <Image
              src={"icons/brands/mazda.svg"}
              width={62}
              height={82}
              alt="Official logo of Mazda automobile manufacturer"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Brands;
