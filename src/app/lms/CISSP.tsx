"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import SolutionCardList from "@/components/cards/SolutionCardList";
import TrainingCard from "@/components/cards/TrainingCard";
import CourseAccordion from "@/components/cards/CourseAccordion";
import { TickIcon } from "@/components/icons/SocialIcons";
import ClientSwiper from "@/components/swiper/ClientSwiper";
import SecurityConsulting from "@/components/cards/SecurityConsulting";
// import { mainCardData } from "@/components/data/QualimatrixSecurityConsulting";
import ServiceFaqAccordion from "@/components/cards/ServiceFaqAccordion";
// import CorporateTrainingForm from "@/components/forms/CorporateTrainingForm";

const CISSP = () => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    if (theme === "light") {
      setBgColor("#1A6FCB"); // Set the background color to blue when the theme is light
    } else {
      setBgColor(""); // Reset to default (no background color) when the theme is dark
    }
  }, [theme]);

  const cardData1 = [
    {
      id: 1,
      title: "Latest CISSP curriculum with regular test monitoring",
    },
    {
      id: 2,
      title: "Top certified Tutors",
    },
    {
      id: 3,
      title: "Hands-on experience with 8 Domains to master Cybersecurity",
    },
    {
      id: 4,
      title: "Live instructor-led training",
    },
  ];
  const cardData2 = [
    {
      id: 1,
      title: "How to implement Cloud Security in your organization.",
    },
    {
      id: 2,
      title: "Cloud Security best practices.",
    },
    {
      id: 3,
      title: "Industry Expert Cloud Security tools and techniques.",
    },
    {
      id: 4,
      title: "How to reduce cost and increase agility.",
    },
    {
      id: 5,
      title: "How to build & architect complex apps.",
    },
    {
      id: 6,
      title: "Real-Time Case Studies.",
    },
  ];
  const cardData3 = [
    {
      id: 1,
      title: "Study Material.",
    },
    {
      id: 2,
      title: "Mock Exams.",
    },
    {
      id: 3,
      title: "16+ hours of live training.",
    },
    {
      id: 4,
      title: "Exam registration assistance.",
    },
    {
      id: 5,
      title: "Case studies soft copy.",
    },
    {
      id: 6,
      title: "Official courseware from Cloud Security Alliance.",
    },
  ];
  const trainingTypes = [
    {
      title: "1-on-1 Training",
      points: [
        { id: 1, title: "Convenient schedule" },
        { id: 2, title: "Personalized Learning Experience" },
        { id: 3, title: "Customized Content" },
        { id: 4, title: "Trainer’s Undivided Attention" },
      ],
    },
    {
      title: "Group Training",
      points: [
        { id: 1, title: "Convenient schedule" },
        { id: 2, title: "Personalized Learning Experience" },
        { id: 3, title: "Customized Content" },
        { id: 4, title: "Trainer’s Undivided Attention" },
      ],
    },
    {
      title: "Corporate Training",
      points: [
        { id: 1, title: "Convenient schedule" },
        { id: 2, title: "Personalized Learning Experience" },
        { id: 3, title: "Customized Content" },
        { id: 4, title: "Trainer’s Undivided Attention" },
      ],
    },
  ];
  const accordionData = [
    {
      id: 1,
      title:
        "What sets between typical application security testing from API security testing?",
      description:
        " To provide thorough coverage of any vulnerabilities, API security testing focuses solely on the interfaces and endpoints exposed by APIs, whereas traditional application security testing concentrates on the application layer.",
    },
    {
      id: 2,
      title: "How often should security tests be carried out for APIs?",
      description:
        "Whenever there are major modifications or upgrades to the API, as well as part of the software development lifecycle (SDLC), frequent API security testing should be carried out.",
    },
    {
      id: 3,
      title:
        "Will automated tools be adequate for checking API security on their own?",
      description:
        "While automated technologies can be useful in identifying some vulnerabilities, skilled cybersecurity professionals must do human testing to uncover complex security concerns and accurately estimate dangers that may arise in the real world.",
    },
  ];
  const whyChooseUsData = [
    {
      id: 1,
      imgSrc: "/assets/services/cybersecurity-consulting/pci-dss.png",
      title: "PCI DSS",
      description:
        "        Qualimatrix caters to a massive range of PCI DSS Compliance consulting services. We are offering PCI Compliance, PA DSS Compliance, and PCI SSF Compliance. ",
    },
    {
      id: 2,
      imgSrc: "/assets/services/cybersecurity-consulting/iso27001.png",
      title: "ISO27001",
      description:
        "We are preferred for ISO27001 Audit and certification For our user-centric custom approach for performing assessment. Our ISO consulting ensures a healthy alliance for such compliances. ",
    },
    {
      id: 3,
      imgSrc: "/assets/services/cybersecurity-consulting/gdpr.png",
      title: "GDPR",
      description:
        "Oriented and detailed GDPR compliance assessments for businesses of every range. A dedicated Cyberteam for supporting businesses to make a healthy shift. to GDPR.",
    },
    {
      id: 4,
      imgSrc: "/assets/services/cybersecurity-consulting/hipaa.png",
      title: "HIPAA",
      description:
        "      The HIPAA compliance program can be put into action. We now have to deal with more than simply HIPAA compliance; ransomware attacks, phishing tactics, and other forms of cybercrime are now targeting the healthcare industry and directly compromising patient safety and data.",
    },
  ];

  return (
    <>
      <div>
        {/* Hero Section Started */}
        <section
          className={`qt-hero-section ${theme}-theme`}
          style={{ backgroundColor: bgColor }}
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
                  <p className={`qt-description ${theme}-theme mb-5 w-[400]`}>
                    Get certified officially to manage, engineer, and design
                    security domains. Our training program includes
                    cybersecurity skill development, providing global
                    recognition with official CISSP certification.  We aim to
                    make our students in-demand technical assistance experts,
                    recognized for their practices to make a company globally
                    secured.
                  </p>
                  <Link href="/" className="col qt-cissp-hero-btn">
                    <>View Schedule</>
                  </Link>

                  <div className="rating-container">
                    <div className="py-1 px-3">
                      <span className="highlight">4.5</span>{" "}
                      <span className="qt-description">
                        {" "}
                        Rating on G Reviews
                      </span>
                      <br />
                      <span className="stars">★★★★★</span>
                    </div>
                    <div className="divider"></div>
                    <div className="py-1 px-3">
                      <span className="highlight">5000+</span>
                      <span className="qt-description"> Professionals</span>
                      <br />
                      <span className="qt-description">Enrolled</span>
                    </div>
                    <div className="divider"></div>
                    <div className="py-1 px-3">
                      <span className="highlight">98.3%</span>
                      <span className="qt-description"> Success Rate</span>
                      <br />
                      <span className=""> </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="qt-hero-3">
                <div className="qt-hero-content-wrap">
                  <div className="qt-logo-wrapper d-flex justify-content-center align-items-center">
                    <Image
                      alt=""
                      width={100}
                      height={300}
                      src={"/assets/cisst/cissp_hero_image.png"}
                    ></Image>
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
                  <p className={`qt-description ${theme}-theme`}>
                    Become a top CISSP Professional with the best CISSP
                    curriculum ever!
                  </p>
                  <div className="text-center">
                    <SolutionCardList cardList={cardData1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Learning Outcomes / Program Delivery */}
        </section>
        <section className={`qt-case-study-main-section ${theme}-theme`}>
          <div className="container pb-5">
            <div className="row">
              <div className={`qt-case-study-main-block ${theme}-theme`}>
                <div className="cards">
                  <div className="card">
                    <h1 className={`qt-title-3 ${theme}-theme mb-3`}>
                      Learning Outcome
                    </h1>
                    <p>The participants would be able to:</p>
                    <div className="text-left">
                      <SolutionCardList cardList={cardData2} />
                    </div>
                  </div>
                  <div className="card">
                    <h1 className={`qt-title-3 ${theme}-theme mb-3`}>
                      Program Deliverables
                    </h1>
                    <p>Deliverables of this program include:</p>
                    <div className="text-left">
                      <SolutionCardList cardList={cardData3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Other Training OPtions */}
          <div className={`qt-service-description-section ${theme}-theme`}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col text-center">
                  <h1 className={`qt-title ${theme}-theme mb-3`}>
                    Other Training Options
                  </h1>
                  <p className={`qt-description ${theme}-theme`}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour,
                  </p>
                  <div className="text-center">
                    {/* <SolutionCardList cardList={cardData1} /> */}
                    <div className="qt-cisst-trainingcard-container">
                      {trainingTypes.map((training, index) => (
                        <TrainingCard
                          key={index}
                          title={training.title}
                          points={training.points}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Accordian Section */}
            <CourseAccordion
              title="Eligibility"
              content="This section contains eligibility criteria details."
            />
          </div>
        </section>

        {/*  */}
        {/* Audit below main section starts */}
        <section className={`qt-audit-main-bottom-section ${theme}-theme`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h1 className={`qt-title ${theme}-theme`}>
                  Certified Information Systems Security Professional Exam
                  Format
                </h1>
                <p className={`qt-description ${theme}-theme mb-5`}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humor.
                </p>

                <ul className={`qt-description ${theme}-theme`}>
                  <li>
                    <span>
                      <TickIcon />
                    </span>
                    <p>Exam Format - Objective Type, Multiple Choice</p>
                  </li>
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
                <Link
                  href="/"
                  className="col qt-cissp-hero-btn"
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    width: "200px",
                  }}
                >
                  <>Register Now</>
                </Link>
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
                Would you still like more info about Certified Information
                Systems Security Professional?
              </h1>
              {/* <h2 className={`qt-title-2 ${theme}-theme mb-3`}>
              <span style={{ color: "#0159DC" }}>
                Web App penetration testing is another techishh… name for
                ethical hacking. Really?
              </span>
            </h2>
            <h1 className={`qt-title ${theme}-theme mb-3`}>
              {" "}
              Ok, Let's get a li’ll Comprehensive!
            </h1> */}
              <p className={`qt-description ${theme}-theme mb-5 `}>
                Book a 10-15-minute Session with our Learning Advisor
              </p>
              {/* <h1 className={`qt-title ${theme}-theme`}>
              Role of Web App Pen Testing in Security
            </h1> */}
            </div>
          </div>
        </section>
        {/* Register For demp class */}
        <section>Register For demp class</section>

        {/* Client Section Starts */}
        <section
          id="qt-home-client-section"
          className={`qt-home-client-section ${theme}-theme`}
        >
          <div className="container">
            <h1 className={`qt-title ${theme}-theme text-center`}>
              What Our Participant Say
            </h1>
            <p className={`qt-description ${theme}-theme mb-3 text-center`}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>

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
                  Frequently Asked Questions (FAQs)
                </h1>
                {/* <h2 className={`qt-title-2 ${theme}-theme mb-3`}>
                <span style={{ color: "#0159DC" }}>
                  Frequently Asked Questions (FAQs)
                </span>
              </h2> */}
              </div>
            </div>
            <div className="row">
              <div className="qt-service-faq-block">
                <ServiceFaqAccordion accordionData={accordionData} />
              </div>
            </div>
          </div>
        </section>

        {/* Request for corporate training */}
        {/* <section>
          Request for corporate training
          <CorporateTrainingForm />
        </section> */}

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
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humor, or randomized words which don't
                    look even slightly believable.
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
              <div className="col-lg-6">
                <h1 className={`qt-title ${theme}-theme mb-3`}>About Us</h1>
                <p className={`qt-description ${theme}-theme mb-5`}>
                  A US based Healthcare Service Provider in the field of
                  Intervention Cardiology care, since 2005. Expanded in 12
                  states of USA with more than 150 branches and staff over 2500
                  with a patient base of more than 150000 Patients and various
                  age levels and demographics. The client has now moved from
                  traditional healthcare practices to online consultation and
                  making the brand available to the patients across the states
                  with 24/7 healthcare availability.
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
      </div>
    </>
  );
};

export default CISSP;
