"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import SolutionCardList from "@/components/cards/SolutionCardList";
import { TickIcon } from "@/components/icons/SocialIcons";
import ClientSwiper from "@/components/swiper/ClientSwiper";
import SecurityConsulting from "@/components/cards/SecurityConsulting";
import ServiceFaqAccordion from "@/components/cards/ServiceFaqAccordion";
import CorporateTrainingForm from "@/components/forms/CorporateTraining";
import ScheduleModal from "@/components/forms/ScheduleModal";
import CourseDescriptionAccordion from "@/components/cards/CourseDescriptionAccordion";
import TrainingCardGrid from "@/components/cards/TrainingCard";
import SolutionCardList2 from "@/components/cards/SolutionCardList2";
import CalendlyWidget from "@/components/cards/CalendlyWidget";
import { accordionCourseDescriptionData, accordionData, cardData1, cardData2, cardData3, trainingData, whyChooseUsData } from "../constants/data";

const CISSP = () => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState("");

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      setBgColor("#1A6FCB"); // Set the background color to blue when the theme is light
    } else {
      setBgColor(""); // Reset to default (no background color) when the theme is dark
    }
  }, [theme]);

  

  return (
    <>
      <div>
        {/* Hero Section Started */}

        <header className="header-logo">
          <img src="/assets/logo.png" />
        </header>

        <section
          className={`qt-hero-section ${theme}-theme`}
          // style={{ backgroundColor: bgColor }}
        >
          <div className="container">
            <div className="qt-hero-1">
              <div className="qt-hero-2 d-flex align-items-center">
                <div className="qt-hero-content-wrap">
                  <h1 className={`qt-title ${theme}-theme mb-3`}>
                    <span style={{ color: "#FFFFFF" }}>
                      {" "}
                      Certified Information Systems Security Professional
                    </span>{" "}
                    <span style={{ color: "#FEAE33" }}>(CISSP)</span>
                  </h1>
                  <p
                    className={`qt-description text-white ${theme}-theme mb-5`}
                  >
                    Get certified officially to manage, engineer, and design
                    security domains. Our training program includes
                    cybersecurity skill development, providing global
                    recognition with official CISSP certification.  We aim to
                    make our students in-demand technical assistance experts,
                    recognized for their practices to make a company globally
                    secured.
                  </p>
                  <button
                    onClick={(e) => {
                      setModalShow(true);
                      e.preventDefault();
                    }}
                    className="col qt-cissp-hero-btn "
                  >
                    <>View Schedule</>
                  </button>

                  <div className="rating-container mt-10">
                    <div className="row qt-description text-white">
                      <div className="col">
                        <div>
                          <span style={{ fontWeight: "600" }}>4.5</span> Ratings
                          on <img src="/lms/google-icon.png" /> Reviews
                        </div>
                        <div>
                          <img src="/lms/star.png" />
                        </div>
                      </div>
                      <div className="qt-line"></div>
                      <div className="col">
                        <p>
                          <span style={{ fontWeight: "600" }}>5000+</span>
                           Professionals Enrolled
                        </p>
                      </div>
                      <div className="qt-line"></div>
                      <div className="col">
                        <p>
                          <span style={{ fontWeight: "600" }}>98.3%</span>
                           Success Rate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="qt-hero-3">
                <div className="qt-hero-content-wrap">
                  <div className="qt-girl-img">
                    <img src="/assets/girl-teaching.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section End */}
        <section className={`qt-case-study-main-section ${theme}-theme`}>
          {/* CISSP Course Overview */}
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className={`qt-title ${theme}-theme mb-3`}>
                  CISSP Course Overview
                </h1>
                <p className={`qt-description ${theme}-theme mb-5`}>
                  The CISSP course covers the latest exam domains, designed to
                  make students advance in the information security field. Our
                  training program provides customized learning solutions from
                  top qualified tutors with lifetime access to the recorded
                  sessions. Individuals looking to accelerate in a cybersecurity
                  career must invest in this course. It will transform your
                  learnings through gaining access from the crucial 8 domains of
                  CBK (Common Body of Knowledge). You will not only know global
                  security standards and recognition but also master skills for
                  managing risks, protecting assets, and gaining hands-on lab
                  experience.
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <div className={`qt-case-study-img-wrap ${theme}-theme `}>
                  <img src="/assets/case-study/ylanes-case-study.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          {/* Key Features */}
          <div className={`qt-service-description-section ${theme}-theme`}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col text-center">
                  <h1 className={`qt-title ${theme}-theme mb-3`}>
                    Key Features
                  </h1>
                  <p className={`qt-description ${theme}-theme mb-5`}>
                    Become a top CISSP Professional with the best CISSP
                    curriculum ever!
                  </p>
                  <div className="d-flex justify-content-center">
                    <SolutionCardList cardList={cardData1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Learning Outcomes / Program Delivery */}
        </section>
        <section className={`qt-case-study-main-section ${theme}-theme`}>
          <div className="container">
            <div className="row">
              <div className={`qt-case-study-main-block ${theme}-theme`}>
                <div className="cards">
                  <div className="card">
                    <h1 className={`qt-title-3 ${theme}-theme mb-3`}>
                      Learning Outcome
                    </h1>
                    <p className={`qt-description ${theme}-theme`}>
                      Completion of the course will make candidates:
                    </p>
                    <div className="text-left">
                      <SolutionCardList2 cardList={cardData2} />
                    </div>
                  </div>
                  <div className="card">
                    <h1 className={`qt-title-3 ${theme}-theme mb-3`}>
                      Program Deliverables
                    </h1>
                    <p className={`qt-description ${theme}-theme`}>
                      This course provides access to:
                    </p>
                    <div className="text-left">
                      <SolutionCardList2 cardList={cardData3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* Other Training OPtions */}
          <div className={`qt-service-description-section ${theme}-theme`}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col text-center mb-5">
                  <h1 className={`qt-title ${theme}-theme mb-3`}>
                    Other Training Options
                  </h1>
                  <p className={`qt-description ${theme}-theme`}>
                    Choose how you want to learn with us!
                  </p>
                </div>
                <TrainingCardGrid data={trainingData} />;
              </div>
            </div>
          </div>
          <div>
            {/* Accordian Section */}
            {/* <CourseAccordion
              title="Eligibility"
              content="This section contains eligibility criteria details."
            /> */}
          </div>
        </section>

        <section className={`qt-main-cyber-section ${theme}-theme`}>
          <div className="container">
            <div className="row text-center mb-5">
              <div className="col text-center mb-5">
                <h1 className={`qt-title ${theme}-theme`}>
                  Course Curriculum & Course Details
                </h1>
              </div>
              <CourseDescriptionAccordion
                accordionData={accordionCourseDescriptionData}
              />
            </div>
          </div>
        </section>
        {/*  */}
        {/* Audit below main section starts */}
        <section className={`qt-audit-main-bottom-section ${theme}-theme`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h1 className={`qt-title ${theme}-theme`}>CISSP EXAM FORMAT</h1>
                <p className={`qt-description ${theme}-theme mb-5`}>
                  Comprehensive overview of CISSP Structure and format
                </p>

                <ul
                  className={`qt-description ${theme}-theme`}
                  style={{ marginBottom: "40px" }}
                >
                  <p>
                    <strong>
                      Exam Format - Objective Type, Multiple Choice
                    </strong>
                  </p>
                  <li>
                    <span>
                      <TickIcon />
                    </span>
                    <p>Exam Duration - 6 Hours</p>
                  </li>
                  <li>
                    <span>
                      <TickIcon />
                    </span>
                    <p>No. of Questions - 250</p>
                  </li>
                  <li>
                    <span>
                      <TickIcon />
                    </span>
                    <p>Passing Criteria - 700 out of 1000</p>
                  </li>
                  <li>
                    <span>
                      <TickIcon />
                    </span>
                    <p>Certificate - Within 5 business days</p>
                  </li>
                  <li>
                    <span>
                      <TickIcon />
                    </span>
                    <p>Result - Immediately after the exam</p>
                  </li>
                  <li>
                    <span>
                      <TickIcon />
                    </span>
                    <p>Closed book</p>
                  </li>
                </ul>
                <button
                  onClick={() => setModalShow(true)}
                  className="qt-know-more"
                >
                  Register Now
                </button>
              </div>

              <div className="col-lg-5 d-flex justify-content-end">
                <div className="qt-audit-main-bottom-img-wrap">
                  <img src="/assets/audit/audit-img.png" alt="audit img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`qt-main-cyber-section ${theme}-theme`}>
          <div className="container">
            <div className="row text-center mb-5">
              <h1 className={`qt-title ${theme}-theme mb-3`}>
                ARE YOU STILL LOOKING TO GET A DEEPER UNDERSTANDING OF CISSP?
              </h1>

              <p className={`qt-description ${theme}-theme mb-5 `}>
                Take a 15-minute session  with our advisor.
              </p>
              {/* <h1 className={`qt-title ${theme}-theme`}>
              Role of Web App Pen Testing in Security
            </h1> */}
              <div>
                <CalendlyWidget />
              </div>
            </div>
          </div>
        </section>
        {/* Register For demp class */}
        {/* <section>Register For demp class</section> */}

        {/* Client Section Starts */}
        <section
          id="qt-home-client-section"
          className={`qt-home-client-section ${theme}-theme`}
        >
          <div className="container">
            <h1 className={`qt-title ${theme}-theme text-center`}>
              WHAT OUR PARTICIPANTS SAY
            </h1>
            <h2 className={`qt-title-2 ${theme}-theme mb-3 text-center`}>
              <span style={{ color: "#0159DC" }}>Voice of our learners</span>
            </h2>
            {/* <p className={`qt-description ${theme}-theme mb-3 text-center`}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p> */}

            <div className={`qt-client-block ${theme}-theme p-0`}>
              <ClientSwiper />
            </div>
          </div>
        </section>
        {/* Client Section Ends */}

        {/* Need Headline for FAQ */}
        <section className={`qt-services-faq-section ${theme}-theme`}>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center mb-5">
                <h1 className={`qt-title ${theme}-theme`}>
                  Know answers to your questions
                </h1>
                <h2 className={`qt-title-2 ${theme}-theme mb-3`}>
                  <span style={{ color: "#0159DC" }}>
                    Frequently Asked Questions (FAQs)
                  </span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="qt-service-faq-block">
                <ServiceFaqAccordion accordionData={accordionData} />
              </div>
            </div>
          </div>
        </section>

        <section className={`qt-development-contact-section ${theme}-theme`}>
          {" "}
          <div className="container">
            <div className="row">
              <CorporateTrainingForm />
            </div>
          </div>
        </section>

        {/* Why Choose Us? */}
        <section>
          <section
            className={`qt-service-main-section ${theme}-theme`}
            style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col text-center mb-5">
                  <h1 className={`qt-title ${theme}-theme`}>Why Choose Us?</h1>
                  <p className={`qt-description ${theme}-theme`}>
                    We commit to making our students the best CISSP
                    Professionals. Our agenda is to provide them with the best
                    skill development training and make them information
                    security techs.
                  </p>
                </div>
              </div>
              <div className="row">
                <SecurityConsulting cardData={whyChooseUsData} />
              </div>
            </div>
          </section>
        </section>
        <section className={`qt-case-study-main-section ${theme}-theme`}>
          <div className="container mt-5 pb-5">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center">
                <div className={`qt-case-study-img-wrap ${theme}-theme `}>
                  <img src="/assets/case-study/ylanes-case-study.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <h1 className={`qt-title ${theme}-theme mb-3`}>About Us</h1>
                <p className={`qt-description ${theme}-theme mb-5`}>
                  We are a team of qualified experts known for shaping the minds
                  of corporate professionals. Our training sessions includes top
                  qualidifed tutors. Our CISSP course certification provides
                  opportunities for individuals to grow and get recognized in
                  the corporate world. Qualimatrix domains are a guide to
                  cybersecurity concepts, making our students experts in global
                  security regulations and standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ScheduleModal show={modalShow} onHide={() => setModalShow(false)} />

      {/* <RegisterAccountForm show={modalShow} onHide={() => setModalShow(false)} /> */}
    </>
  );
};

export default CISSP;
