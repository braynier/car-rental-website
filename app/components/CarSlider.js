"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { fadeIn } from "@/variants";

const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: "images/carSlider/car01.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
];

function CarSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="mx-auto max-w-[385px] sm:mx-0">
                <Image
                  src={car.image}
                  width={380}
                  height={284}
                  alt={car.name}
                />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] uppercase text-secondary">
                      {car.type}
                    </div>
                    <h3 className="text-lg font-bold uppercase">{car.name}</h3>
                    <h3 className="mb-10 font-semibold uppercase text-accent">
                      {car.price}/day
                    </h3>
                  </div>
                  <div className="flex h-max gap-x-2 text-accent">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="mb-10 flex w-max gap-x-3 xl:gap-x-4">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt="Star rating icon"
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}

export default CarSlider;
