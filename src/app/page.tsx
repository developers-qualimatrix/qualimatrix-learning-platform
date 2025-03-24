import { Metadata } from "next";

import CISSP from "./lms/CISSP";

export const metadata: Metadata = {
  title: "Qualimatrix Learning Systems",
  description:
    "Qualimatrix Technologies is an Independent Software Testing company in India USA UK UAE. Contact us for App Testing Service, Functional Testing Service, Security Testing Service and more. E-mail Us On: support@qualimatrix.tech · Call Us On: +91 81033 53297",
  keywords:
    "Best game testing Services, Top mobile app testing, Best security testing Services, QA performance testingServices, Career at Qualimatrix, Career for Testers",
  alternates: {
    canonical: "https://lms.qualimatrix.tech",
  },
};

export default function Home() {
  return (
    <>
      <CISSP />
    </>
  );
}
