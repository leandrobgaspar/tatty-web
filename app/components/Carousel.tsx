"use client";
import Image from "next/image";
import Link from "next/link";
import AppleStore from "@/public/images/AppleStore";
import GooglePlay from "@/public/images/GooglePlay";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SwiperComponent from "./Swiper";
export default function Carousel() {
  const items = [
    {
      id: 1,
      url: "/Carousel/1.png",
      title: "It’s all in one place.",
      text: "Tatty app is a simple way for tattoo artists to review and respond to submissions and set appointments, eliminating the “back and forth” between you and your clients.",
    },
    {
      id: 2,
      url: "/Carousel/2.png",
      title: "Profile",
      text: "Edit your profile and put your informations more important for your clients.",
    },
    {
      id: 3,
      url: "/Carousel/3.png",
      title: "Intake From",
      text: "Send your tattoo artist complete information about the tattoo you want to do.",
    },
    {
      id: 4,
      url: "/Carousel/4.png",
      title: "Notifications",
      text: "You will receive a notification when an artist accepts your tattoo proposal, or if you are an artist when a client contacts you.",
    },
    {
      id: 5,
      url: "/Carousel/5.png",
      title: "Submissions",
      text: "Answer your customers' questions and requests from the app itself.",
    },
    {
      id: 6,
      url: "/Carousel/5.png",
      title: "Easily Respond",
      text: "The response form is simple to use.",
    },
    {
      id: 7,
      url: "/Carousel/5.png",
      title: "Appointments",
      text: "Make your own work schedule, and schedule your tattoo.",
    },
    {
      id: 8,
      url: "/Carousel/5.png",
      title: "Calendar",
      text: "View a calendar of the artist, and integration a calendar with google calendar.",
    },
    {
      id: 9,
      url: "/Carousel/5.png",
      title: "Instagram",
      text: "share your tatty link on your social networks.",
    },
  ];

  return (
    <>
      <SwiperComponent>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div key={item.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  hidden: { opacity: 1, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delayChildren: 0.3,
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                <div className="flex flex-row my-20 gap-10 items-center justify-center w-full h-full">
                  <div className=" w-[322px] h-[622px] flex  items-center justify-center relative ">
                    <Image
                      className="absolute"
                      src="/Carousel/mockup.png"
                      width={322}
                      height={655}
                      alt="carousel"
                    />

                    <Image
                      className="rounded-3xl h-[622px]"
                      src={item.url}
                      width={300}
                      height={100}
                      alt="carousel"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-6xl text-[#CD235E] font-bold bg-w w-[355px] ">
                      {item.title}
                    </h1>

                    <div className="mt-10 text-gray-400 w-[355px]">
                      <span>{item.text}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </>
  );
}
