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
      name: "Floyd Miles",
      // country: "Prep Monkey",
      rating: 5,
      description:
        "This course was very insightful. My tutor was skilled and knew what he was teaching. I am glad I chose to learn from Qualimatrix. ",
      imagePath: "/assets/home/male-client.png",
    },
    {
      name: "Courtney Henry",
      // country: "Ylanes",
      rating: 5,
      description:
        " I didn't expect this course to be this amazing. Initially, I was uncomfortable as it was group training, but my tutor was very supportive. He made sure I was comfortable and maximizing my learning.",
      imagePath: "/assets/home/male-client.png",
    },

    {
      name: "Ralph Edwards",
      // country: "Opigo",
      rating: 5,
      description:
        "Qualimatrix has quality course materials and the best certified tutors. I am more clear with cybersecurity and its concepts now. I am fully satisfied with my investment in this course. The tutors, materials, exams, and network security are amazing here. ",
      imagePath: "/assets/home/male-client.png",
    },
    {
      name: "Rebecca Jones",
      // country: "Prep Monkey",
      rating: 5,
      description:
        "I have taken many courses but this portal stands out from all because: The instructor really knew what he was teaching, Complex topics were so easily understood, and the Support desk team was really good. Worth the money and time",
      imagePath: "/assets/home/male-client.png",
    },
    {
      name: "Alice Paul",
      // country: "Ylanes",
      rating: 5,
      description:
        " The interactive elements helped me engage in taking different tests. This builds my skills and knowledge. The portal is very helpful and good for professional skill development. Highly recommended!",
      imagePath: "/assets/home/male-client.png",
    },
    {
      name: "Peter Brown",
      // country: "Ylanes",
      rating: 5,
      description:
        " Qualimatrix provided me with a super tutor for such a complex course. He personally adopted different teaching methods to make sure students were learning as taught. It was amazing and I feel confident with my skills now. ",
      imagePath: "/assets/home/male-client.png",
    },
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
                    {/* <div className="card-country">{card.country}</div> */}
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
