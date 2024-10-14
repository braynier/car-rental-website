"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const testimonialData = [
  {
    message:
      "I had an amazing experience with this car rental company! The staff was super friendly, the booking process was quick and easy, and the car was spotless and ready when I arrived. I’ll definitely be renting from them again next time I'm in town!",
    avatar: "/images/testimonial/avatar.png", // Placeholder for image URLs
    name: "Sarah Thompson",
    job: "Marketing Manager",
  },
  {
    message:
      "Great selection of cars at fantastic prices! I needed a last-minute rental, and they had me on the road in no time. The car performed perfectly throughout my trip, and the return process was hassle-free. Highly recommend!",
    avatar: "/images/testimonial/avatar.png",
    name: "James Reynolds",
    job: "Small Business Owner",
  },
  {
    message:
      "I’ve rented cars from other companies before, but this was by far the smoothest and most pleasant experience. The car was in excellent condition, and the customer service team went above and beyond to make sure I was comfortable. Five stars!",
    avatar: "/images/testimonial/avatar.png",
    name: "Olivia Martinez",
    job: "Travel Blogger",
  },
  {
    message:
      "From start to finish, everything was seamless. I reserved my car online, picked it up within minutes, and it was clean and ready to go. The staff even gave me great tips on local attractions. Returning the car was equally easy. I’ll definitely rent here again!",
    avatar: "/images/testimonial/avatar.png",
    name: "David Cooper",
    job: "Software Engineer",
  },
  {
    message:
      "What impressed me the most was the attention to detail and the level of customer service. They genuinely care about their customers and made sure my trip went smoothly. The car was perfect, and their rates were unbeatable. I'll be recommending them to all my friends and family!",
    avatar: "/images/testimonial/avatar.png",
    name: "Emily Johnson",
    job: "Teacher",
  },
];

function TestimonialsSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[568px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center text-center">
                <FaQuoteLeft className="mb-6 text-7xl text-accent" />
                <div className="mb-12 max-w-[847px] text-2xl font-medium xl:text-4xl">
                  {message}
                </div>
                <Image
                  className="mb-4"
                  src={avatar}
                  width={64}
                  height={64}
                  alt="Testimonial"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}

export default TestimonialsSlider;
