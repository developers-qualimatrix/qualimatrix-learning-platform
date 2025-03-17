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
import KnowMoreForm from "@/components/forms/KnowMoreForm";
import CorporateTrainingForm from "@/components/forms/CorporateTraining";
import RegisterAccountForm from "@/components/forms/RegisterAccount";
import ScheduleModal from "@/components/forms/ScheduleModal";
import CourseDescriptionAccordion from "@/components/cards/CourseDescriptionAccordion";
import TrainingCardGrid from "@/components/cards/TrainingCard";
// import CorporateTrainingForm from "@/components/forms/CorporateTrainingForm";

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
      title: "Are there any group discounts for classroom training programs?",
      description:
        "Yes, we provide group discounts based on our set offer packages for classroom training programs. Please contact us at support@qualimatrix.tech, to get more details on discount packages.",
    },
    {
      id: 2,
      title: "Will this training session include materials?",
      description:
        "Yes, this training session will be coming with materials just after the training session to help students study whenever and wherever they want.   ",
    },
    {
      id: 3,
      title: "Are the practice tests necessary to be taken during the course?",
      description:
        "Yes, our practice tests make students ready for best results, therefore, they are officially compulsory to be taken.",
    },
    {
      id: 4,
      title: "Can this course be attended virtually/Online?",
      description:
        "We believe students learn better in physical classes. Though if any inconvenience, our portal gives live class option to students so they do not miss out on any learning session.",
    },
  ];

  const accordionCourseDescriptionData = [
    {
      id: 1,
      title: "Training Delivery Style",
      content: [
        "Our CISSP certification provides varied interactive sessions to engage, test, and analyze students’ growth and skill development. These practices typically last for 1-2 hours.",
        "The training sessions will provide our students with insight into technical skill development. It turns participants into top-notch cybersecurity program experts. The core features of our training program include:",
        [
          "Hands-on Labs and Simulations",
          "Comprehensive exam assistance and preparation",
          "Real-world case connectivity",
          "Interactive Discussions",
          "Top-qualified expert-led instructions",
          "Best Study Materials",
        ],
      ],
    },
    {
      id: 2,
      title: "Benefits of CISSP Training",
      content: [
        "Participants gain access from the crucial 8 domains of CBK (Common Body of Knowledge).",
        "Get global recognition with official CISSP certification.",
        "Get customized learning solutions from top-qualified tutors with lifetime access to the recorded sessions.",
        "Advance your career options in roles like CISO (Chief Information Security Officer) or Security Manager.",
        "Learn about ISO 27001, HIPAA, and GDPR for company regulations and compliance.",
      ],
    },
    {
      id: 3,
      title: "Faculty",
      content: [
        "Our trainers are certified cybersecurity professionals, holding experience in their teaching values. They guide their students with connective teaching patterns as per each individual. From giving customized solutions to motivating them with real-world examples, they are our true heroes.",
        "Our Faculty members include:",
        [
          "15+ years of expertise",
          "Trained more than 5000 professionals",
          "50% Trainer success records",
        ],
      ],
    },
  ];

  const whyChooseUsData = [
    {
      id: 1,
      imgSrc: "/lms/icon1.png",
      title: "Accredited Courseware",
      description:
        "Our materials are officially qualified for top CISSP training. This helps our students excel in certification exams. Our in-depth course insights are specially designed by industry experts for the highest-quality learning.",
    },
    {
      id: 2,
      imgSrc: "/lms/icon2.png",
      title: "Experienced Instructors",
      description:
        "We hire highly professional tutors in CISSP who have good training experience. They come with expert guidance, real-world examples, and in-depth insights to conquer security solutions.",
    },
    {
      id: 3,
      imgSrc: "/lms/icon3.png",
      title: "Practical Training",
      description:
        "Our approach to teaching includes interactive sessions and one-to-one Q&A programs, enabling our students to be clear on every step of their learning journey.",
    },
    {
      id: 4,
      imgSrc: "/lms/icon4.png",
      title: "99.3% Passing Rate",
      description:
        "  We shape a bright future for our students. Our tutors have guided 1000+ students with a structured learning path. Our students achieved 99.3% in their CISSP exam. The success rate at Qualimatrix is definite.",
    },
  ];

  const trainingData = [
    {
      title: "1-on-1 Training",
      points: [
        "Learn at your own time",
        "Personalized tutor assistance",
        "Focused attention",
      ],
    },
    {
      title: "Group Training",
      points: [
        "Cost effective",
        "Networking and Team bonding",
        "Diverse Q&A sessions",
      ],
    },
    {
      title: "Corporate Training",
      points: [
        "Access whenever & wherever you need",
        "Customized training",
        "Team collaboration",
      ],
    },
  ];

  return (
    <>
      <div>
        {/* Hero Section Started */}

        <header className="header-logo">
          <img src="/assets/logo.png" />
        </header>

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
                          <strong>4.5</strong> Ratings on Reviews
                        </div>
                        <div>
                          <img src="/lms/star.png" />
                        </div>
                      </div>
                      <div className="qt-line"></div>
                      <div className="col">
                        <p>
                          <strong>5000+</strong> Professionals Enrolled
                        </p>
                      </div>
                      <div className="qt-line"></div>
                      <div className="col">
                        <p>
                          <strong>98.3%</strong> Success Rate
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
          <div className="container">
            <div className="row">
              <div className={`qt-case-study-main-block ${theme}-theme`}>
                <div className="cards">
                  <div className="card">
                    <h1 className={`qt-title-3 ${theme}-theme mb-3`}>
                      Learning Outcome
                    </h1>
                    <p className={`qt-description ${theme}-theme`}>
                      The participants would be able to:
                    </p>
                    <div className="text-left">
                      <SolutionCardList cardList={cardData2} />
                    </div>
                  </div>
                  <div className="card">
                    <h1 className={`qt-title-3 ${theme}-theme mb-3`}>
                      Program Deliverables
                    </h1>
                    <p className={`qt-description ${theme}-theme`}>
                      Deliverables of this program include:
                    </p>
                    <div className="text-left">
                      <SolutionCardList cardList={cardData3} />
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

                <ul className={`qt-description ${theme}-theme`}>
                  <p>Exam Format - Objective Type, Multiple Choice</p>
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
                <Link href="/" className="col qt-cissp-hero-btn">
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
