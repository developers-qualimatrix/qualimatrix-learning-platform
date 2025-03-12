"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
//import "swiper/css/swiper.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Rating from "../Rating";
import { useTheme } from "@/context/ThemeContext";

const ClientSwiper = () => {
  const { theme, toggleTheme } = useTheme();

  const testimonials = [
    {
      name: "Niket Shrivastava",
      country: "Prep Monkey",
      rating: 5,
      description:
        "Found the perfect QA company. Attention to detail and commitment to client satisfaction is unparalleled. Will use their services again.",
      imagePath: "/assets/home/male-client.png",
    },
    {
      name: "Keval Mehta",
      country: "Ylanes",
      rating: 5,
      description:
        "Amazed by the professionalism and expertise displayed by Qualimatrix. Went above and beyond to ensure my satisfaction. Earned a client who will recommend them.",
      imagePath: "/assets/home/male-client.png",
    },
    {
      name: "Khetanl Mehta",
      country: "Defi67",
      rating: 5,
      description:
        "Connected with Qualimatrix. The team is extremely professional and qualified. Product is of excellent quality. Couldn’t be happier with my decision.",
      imagePath: "/assets/home/male-client.png",
    },
    {
      name: "Mohit Goswami",
      country: "Opigo",
      rating: 5,
      description:
        "Working with Qualimatrix for the past two years. Helped programmers speed up and improve the process. QAs are extremely professional and helpful.",
      imagePath: "/assets/home/male-client.png",
    },
    {
      name: "Jessica N",
      country: "Applied",
      rating: 5,
      description:
        "Amazing experience with Qualimatrix! Top-notch QA services. Exceeded expectations. Positive attitude even after multiple change requests. Delivers with high stability.",
      imagePath: "/assets/home/female-client.png",
    },
    {
      name: "Floyd Miles",
      country: "VibeSocialMusic",
      rating: 5,
      description:
        "Identified potential issues and provided clear, actionable reports. Made it easy for our development team to address bugs. Collaboration with our developers was seamless.",
      imagePath: "/assets/home/male-client.png",
    },
    {
      name: "Floyd Miles",
      country: "NIQ",
      rating: 5,
      description:
        "Project completed on schedule. Qualimatrix was always responsive to our inquiries and concerns. Professionalism and adherence to timelines were impressive.",
      imagePath: "/assets/home/male-client.png",
    },
    //  {
    //    name: "Floyd Miles",
    //    country: "VoltUp",
    //    rating: 5,
    //    description:
    //      "Satisfied with the testing services provided by Qualimatrix. Attention to detail, expertise, and commitment to delivering a high-quality product have exceeded our expectations. Testing phase for our App went smoothly. Confident in the app's stability and performance thanks to their meticulous work.",
    //    imagePath: "/assets/home/human.png",
    //  },
  ];

  return (
    <div className="qt-client-swiper-card-area">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 1,
          },
          865: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 3,
          },
          1700: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={true}
      >
        <div>
          {testimonials.map((card, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                // <LinearBorder borderRadius={20}>
                <div
                  className={`card ${theme}-theme ${
                    isActive && window.innerWidth >= 840
                      ? "custom-active-slide"
                      : ""
                  }`}
                >
                  <div className="card-body">
                    <div className="card-img">
                      <img
                        src={card.imagePath}
                        alt={card.name}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#BEEBFF" : "#feae33",
                        }}
                      />
                    </div>
                    <div className="card-title">{card.name}</div>
                    <div className="card-country">{card.country}</div>
                    <div className="card-rating">
                      <Rating rating={card.rating} />
                    </div>
                    <div className={`card-description ${theme}-theme`}>
                      {card.description}
                    </div>
                  </div>
                </div>
                //</LinearBorder>
              )}
            </SwiperSlide>
          ))}
        </div>
        <div className="qt-swiper-navigation-btn-wrap">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default ClientSwiper;
