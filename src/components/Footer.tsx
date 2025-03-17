/* eslint-disable @next/next/no-img-element */
"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { FC, MouseEvent, useEffect, useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icons/SocialIcons";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import Wave from "react-wavify";
import { LinearBorder } from "./LinearBorder";
// import { Spinner } from "react-bootstrap";
import { useAlert } from "@/context/AlertContext";
import { createSupabaseBrowserClient } from "@/utils/supabase/browserClient";
import { useRouter } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    )
    .required("Email Address is required"),
});

const supabase = createSupabaseBrowserClient();

const Footer: FC = () => {
  const { showAlert } = useAlert();
  const { theme } = useTheme();
  const [loader, setLoader] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);
  const router = useRouter();
  const fillColor = theme === "dark" ? "#FFF" : "#083C74";
  const waveFillColor = theme === "dark" ? "#0159DC" : "#0159DC";
  const currentYear = new Date().getFullYear();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values, action) => {
      try {
        const { data, error } = await supabase
          .from("subscribers")
          .insert([
            {
              email: values.email,
            },
          ])
          .select();

        if (error) {
          console.log(error);
        } else {
          showAlert("success", "Thanks for subscribing!");
          formRef.current?.reset();
        }
      } catch (error) {
        console.log(error);
      } finally {
        formRef.current?.reset();
      }
      action.resetForm();
    },
  });
  return (
    <div className="position-relative">
      <section className={`qt-footer ${theme}-theme`}>
        <div className="container">
          <div className="row qt-footer-row">
            <div className="col text-center p-0 ">
              <Link href="/">
                <span className="qt-footer-logo">
                  <svg
                    width="386"
                    height="70"
                    viewBox="0 0 386 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M83.9899 39.6167V20.5374H91.7491V53.4652H84.2256V47.6126H83.8825C83.1395 49.4565 81.9177 50.9641 80.2174 52.1361C78.5311 53.3078 76.4518 53.8938 73.98 53.8938C71.8223 53.8938 69.9146 53.4152 68.2568 52.4574C66.6136 51.4858 65.3276 50.0781 64.3987 48.2345C63.4699 46.3766 63.0054 44.1328 63.0054 41.5031V20.5374H70.7648V40.3027C70.7648 42.3891 71.3362 44.0469 72.4795 45.2761C73.6225 46.5052 75.123 47.1196 76.9807 47.1196C78.124 47.1196 79.2314 46.8409 80.303 46.2836C81.3748 45.7263 82.2537 44.8974 82.9393 43.7969C83.6396 42.6823 83.9899 41.2886 83.9899 39.6167ZM109.202 54.1296C107.116 54.1296 105.237 53.758 103.565 53.015C101.907 52.2573 100.592 51.1427 99.6208 49.6707C98.6632 48.1986 98.1846 46.3837 98.1846 44.2258C98.1846 42.3679 98.5277 40.8315 99.2136 39.6167C99.8996 38.4017 100.835 37.4301 102.021 36.7011C103.207 35.9724 104.543 35.4223 106.03 35.0505C107.53 34.6648 109.081 34.3861 110.681 34.2144C112.61 34.0145 114.175 33.8357 115.375 33.6786C116.575 33.507 117.447 33.2497 117.99 32.9069C118.547 32.5494 118.826 31.9993 118.826 31.2562V31.1276C118.826 29.5126 118.347 28.2622 117.39 27.3761C116.433 26.4901 115.054 26.0468 113.253 26.0468C111.353 26.0468 109.845 26.4614 108.73 27.2903C107.63 28.119 106.887 29.098 106.501 30.227L99.2564 29.1982C99.8278 27.1973 100.771 25.5254 102.086 24.1817C103.4 22.8242 105.008 21.8096 106.908 21.1377C108.809 20.4518 110.91 20.109 113.21 20.109C114.796 20.109 116.375 20.2947 117.947 20.666C119.519 21.0376 120.955 21.6522 122.255 22.5098C123.556 23.3528 124.599 24.5033 125.385 25.961C126.185 27.4189 126.585 29.241 126.585 31.4276V53.4652H119.126V48.9419H118.869C118.397 49.8564 117.733 50.714 116.876 51.5142C116.032 52.3003 114.968 52.9363 113.682 53.4221C112.41 53.8938 110.917 54.1296 109.202 54.1296ZM111.217 48.4272C112.774 48.4272 114.125 48.12 115.268 47.5055C116.411 46.8767 117.29 46.0478 117.904 45.0188C118.533 43.9898 118.847 42.868 118.847 41.6532V37.7729C118.604 37.9733 118.19 38.159 117.604 38.3305C117.033 38.5019 116.39 38.652 115.675 38.7807C114.961 38.9093 114.253 39.0236 113.553 39.1235C112.853 39.2237 112.246 39.3093 111.731 39.381C110.574 39.5381 109.538 39.7953 108.623 40.1525C107.709 40.5097 106.987 41.0101 106.458 41.6532C105.929 42.282 105.665 43.0966 105.665 44.0972C105.665 45.5262 106.187 46.6051 107.23 47.3341C108.273 48.0628 109.602 48.4272 111.217 48.4272ZM142.147 9.5618V53.4652H134.387V9.5618H142.147ZM150.126 53.4652V20.5374H157.885V53.4652H150.126ZM154.027 15.8643C152.798 15.8643 151.74 15.4569 150.854 14.6423C149.968 13.8134 149.525 12.8203 149.525 11.6624C149.525 10.4906 149.968 9.49724 150.854 8.68268C151.74 7.85378 152.798 7.43945 154.027 7.43945C155.27 7.43945 156.328 7.85378 157.2 8.68268C158.085 9.49724 158.527 10.4906 158.527 11.6624C158.527 12.8203 158.085 13.8134 157.2 14.6423C156.328 15.4569 155.27 15.8643 154.027 15.8643ZM235.225 54.1296C233.138 54.1296 231.26 53.758 229.589 53.015C227.931 52.2573 226.616 51.1427 225.644 49.6707C224.686 48.1986 224.208 46.3837 224.208 44.2258C224.208 42.3679 224.55 40.8315 225.236 39.6167C225.924 38.4017 226.859 37.4301 228.045 36.7011C229.232 35.9724 230.566 35.4223 232.053 35.0505C233.554 34.6648 235.104 34.3861 236.704 34.2144C238.634 34.0145 240.199 33.8357 241.399 33.6786C242.599 33.507 243.47 33.2497 244.014 32.9069C244.57 32.5494 244.85 31.9993 244.85 31.2562V31.1276C244.85 29.5126 244.37 28.2622 243.413 27.3761C242.455 26.4901 241.078 26.0468 239.277 26.0468C237.375 26.0468 235.868 26.4614 234.755 27.2903C233.653 28.119 232.91 29.098 232.525 30.227L225.28 29.1982C225.852 27.1973 226.794 25.5254 228.108 24.1817C229.424 22.8242 231.031 21.8096 232.932 21.1377C234.832 20.4518 236.932 20.109 239.232 20.109C240.818 20.109 242.398 20.2947 243.972 20.666C245.542 21.0376 246.98 21.6522 248.278 22.5098C249.579 23.3528 250.623 24.5033 251.41 25.961C252.209 27.4189 252.609 29.241 252.609 31.4276V53.4652H245.149V48.9419H244.892C244.419 49.8564 243.756 50.714 242.901 51.5142C242.057 52.3003 240.991 52.9363 239.705 53.4221C238.433 53.8938 236.942 54.1296 235.225 54.1296ZM237.241 48.4272C238.797 48.4272 240.147 48.12 241.293 47.5055C242.436 46.8767 243.314 46.0478 243.927 45.0188C244.555 43.9898 244.872 42.868 244.872 41.6532V37.7729C244.627 37.9733 244.214 38.159 243.628 38.3305C243.056 38.5019 242.413 38.652 241.698 38.7807C240.984 38.9093 240.279 39.0236 239.576 39.1235C238.876 39.2237 238.268 39.3093 237.753 39.381C236.598 39.5381 235.561 39.7953 234.646 40.1525C233.732 40.5097 233.011 41.0101 232.481 41.6532C231.953 42.282 231.688 43.0966 231.688 44.0972C231.688 45.5262 232.211 46.6051 233.254 47.3341C234.297 48.0628 235.626 48.4272 237.241 48.4272ZM276.851 20.5374V26.5401H257.925V20.5374H276.851ZM262.598 12.6486H270.358V43.5611C270.358 44.6045 270.513 45.4047 270.828 45.9622C271.156 46.5052 271.584 46.8767 272.114 47.0768C272.643 47.277 273.229 47.3769 273.873 47.3769C274.357 47.3769 274.8 47.3413 275.201 47.2698C275.614 47.1983 275.931 47.134 276.143 47.0768L277.449 53.1436C277.036 53.2866 276.445 53.4436 275.671 53.6153C274.916 53.7867 273.986 53.8867 272.886 53.9154C270.941 53.9725 269.19 53.6794 267.634 53.0362C266.076 52.379 264.841 51.3643 263.926 49.9922C263.026 48.6204 262.583 46.9054 262.598 44.8474V12.6486ZM283.341 53.4652V20.5374H290.864V26.0256H291.207C291.809 24.1246 292.835 22.66 294.295 21.6307C295.764 20.5876 297.443 20.0659 299.331 20.0659C299.759 20.0659 300.239 20.0874 300.765 20.1302C301.31 20.1589 301.76 20.2089 302.116 20.2801V27.4189C301.79 27.3044 301.268 27.2045 300.553 27.1189C299.853 27.0187 299.172 26.9687 298.517 26.9687C297.1 26.9687 295.831 27.276 294.7 27.8904C293.587 28.4907 292.709 29.3268 292.063 30.3986C291.423 31.4704 291.101 32.7067 291.101 34.1073V53.4652H283.341ZM307.271 53.4652V20.5374H315.031V53.4652H307.271ZM311.172 15.8643C309.942 15.8643 308.886 15.4569 308.001 14.6423C307.115 13.8134 306.67 12.8203 306.67 11.6624C306.67 10.4906 307.115 9.49724 308.001 8.68268C308.886 7.85378 309.942 7.43945 311.172 7.43945C312.416 7.43945 313.472 7.85378 314.345 8.68268C315.231 9.49724 315.674 10.4906 315.674 11.6624C315.674 12.8203 315.231 13.8134 314.345 14.6423C313.472 15.4569 312.416 15.8643 311.172 15.8643ZM329.355 20.5374L335.999 32.6924L342.75 20.5374H350.962L341.036 37.0014L351.133 53.4652H342.965L335.999 41.6102L329.098 53.4652H320.866L330.899 37.0014L321.123 20.5374H329.355Z"
                      fill={fillColor}
                    />
                    <path
                      d="M0.53941 34.5264C3.58092 50.3344 18.5645 60.4833 34.3706 57.4413C34.9237 57.3349 35.8718 57.1524 36.8051 56.8907L47.9043 69.4266C48.2173 69.7764 48.6887 70.0955 49.321 69.9735L59.9898 67.9202C61.2543 67.677 61.6432 66.2908 60.798 65.3058L47.5313 51.3018C55.2057 44.3332 59.3383 33.8657 57.3614 23.5906C54.3199 7.78284 39.2267 -2.5093 23.4209 0.53273C7.61503 3.57476 -2.50212 18.7184 0.53941 34.5264ZM13.184 32.0928C11.5112 23.3984 17.2399 14.837 25.8542 13.179C34.5474 11.5061 43.0437 17.3299 44.7166 26.0241C46.3742 34.6394 40.6305 43.1219 31.937 44.795C23.323 46.4528 14.8418 40.7081 13.184 32.0928Z"
                      fill="#EE6C4D"
                    />
                    <path
                      d="M211.3 54.5268L201.676 20.4527L201.126 20.4597L194.548 53.7941L188.745 54.8102L174.437 23.3105L174.044 23.3152L173.33 54.0605L166.969 54.4548L169.426 12.2107L184.978 11.3865L191.886 42.0361L199.04 10.8955L214.613 11.643L217.103 53.5106L211.3 54.5268Z"
                      fill="#EE6C4D"
                    />
                    <path
                      d="M372.563 9.15137H375.386L379.166 18.3769H379.315L383.095 9.15137H385.917V21.8831H383.704V13.1363H383.586L380.067 21.8458H378.413L374.895 13.1176H374.777V21.8831H372.563V9.15137Z"
                      fill={fillColor}
                    />
                    <path
                      d="M360.448 11.0848V9.15137H370.606V11.0848H366.671V21.8831H364.383V11.0848H360.448Z"
                      fill={fillColor}
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div
            className="qt-footer-row row"
            style={{
              borderBottom: "1px solid",
              borderTop: "1px solid",
              borderColor: "#555",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            {" "}
            <div className="col p-0">
              {" "}
              <a
                href="https://www.google.com/search?q=Qualimatrix+Technologies+Pvt+Ltd&stick=H4sIAAAAAAAA_-NgU1I1qDBOSkw1NE-0NDQzTzQ0S0qzMqgwNTAxTU5Js0g1NkhONjczWsSqEFiamJOZm1hSlFmhEJKanJGXn5OfnplarBBQVqLgU5ICAJVXj_VMAAAA&hl=en-GB&mat=Cf9fNW2JINChElcBEKoLafZApqBQav3JzyzqWRQ2A3lTdh8YNrkqn560MlaE91P75bnAFnXSRcdWLl6uL3PLqC8sB7RIbbwwvetII8TvpIZDR2bpehtfCZeeN85zxJWcGUo&authuser=0"
                target="_blank"
              >
                <h6 className=" d-flex gap-1 align-items-center">
                  <FaLocationDot className="qt-location-icon" />
                  Bengaluru{" "}
                </h6>

                <p className={`qt-description ${theme}-theme `}>
                  Kaman Amaryllis, Embassy Golf Link Road Bengaluru, Karnataka,
                  India - 560071
                </p>
              </a>{" "}
            </div>
            <div className="col p-0">
              <a
                href="https://www.google.com/search?q=Qualimatrix+Technologies+Pvt+Ltd&stick=H4sIAAAAAAAA_-NgU1I1qDC2NDM2MDY1Mja3TDQ3SkmxMqhINrJMsbBINTE3TElLNjdNWcSqEFiamJOZm1hSlFmhEJKanJGXn5OfnplarBBQVqLgU5ICAJXquYhMAAAA&hl=en-GB&mat=CYCCjikmksvCElYBEKoLabf0FE1mRBlz8hwgbu8sfswrRPkARQhS48OOTWDLUd2NW6-xXK1W-GSBAZ8tr4_woHpoevqJ_fELpKVrpnbUv3Iy5n_ZL8KXcuuuv107mjQA3Q&authuser=0"
                target="_blank"
              >
                <h6 className=" d-flex gap-1 align-items-center">
                  <FaLocationDot className="qt-location-icon" />
                  Indore{" "}
                </h6>
                <p className={`qt-description ${theme}-theme `}>
                  505-506, 5th Floor, Cliffton Corporate, Vijay Nagar, Indore,
                  Madhya Pradesh 452010
                </p>
              </a>
            </div>
            <div className="col p-0">
              <a
                href="https://www.google.com/search?q=Qualimatrix+Technologies+Pvt+Ltd&stick=H4sIAAAAAAAA_-NgU1I1qLAwSE00MU4zsLA0N0hNMU6zMqgwtzBKM0hOS0lOSk1OMTROWcSqEFiamJOZm1hSlFmhEJKanJGXn5OfnplarBBQVqLgU5ICAHODaXZMAAAA&hl=en-GB&mat=Cdi49r8oCUIBElYBEKoLaQHkApVbJbMsWeFis_WbsEW3r8YyVqNa4IJ6my3xfyAieYJezGzO92bT0ao4OWBxRu9GJ_1OsJ9KsIBcDbGHxgC6S3SWHAIKoSJwm8tWwm45ZA&authuser=0"
                target="_blank"
              >
                <h6 className=" d-flex gap-1 align-items-center">
                  <FaLocationDot className="qt-location-icon" />
                  USA{" "}
                </h6>
                <p className={`qt-description ${theme}-theme `}>
                  4900 California Ave, Bakersfield, CA 93309, United States
                </p>
              </a>
            </div>
            <div className="col p-0">
              <a
                href="https://www.google.com/search?q=Qualimatrix+Technologies+Pvt+Ltd&stick=H4sIAAAAAAAA_-NgU1I1qDCxMDczTDIzNk1LMk9OTUmxMqgwM7SwSEozN09JM0pKNjZMXsSqEFiamJOZm1hSlFmhEJKanJGXn5OfnplarBBQVqLgU5ICAHBIhNxMAAAA&hl=en-GB&mat=CdOCp53YYX0gElcBEKoLaRxGvKDZ4j2_O6VHEfg3FNhmbCYCoMGjkG3VzRTBhXkIxS42ZYRJ3YeeTA2qWXrn8yN1sQSQRzRJcrwgWvp12U1cOrdBTTJXqPeeDHZ8yDHJKxk&authuser=0"
                target="_blank"
              >
                <h6 className=" d-flex gap-1 align-items-center">
                  <FaLocationDot className="qt-location-icon" />
                  UK{" "}
                </h6>
                <p className={`qt-description ${theme}-theme `}>
                  Grays Inn Road, London WC1X8BP, United Kingdom
                </p>
              </a>
            </div>
          </div>
          <div className="row ">
            {/* <div
              className={`col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 qt-footer-border ${theme}-theme`}
            >  */}
            <div className="qt-footer-row p-0">
              <div className={`col qt-footer-border ${theme}-theme`}>
                <div>
                  {" "}
                  <h6>COMPANY</h6>
                  <ul>
                    <Link href="/culture">
                      {" "}
                      <li>Culture</li>
                    </Link>
                    <Link href="/contact-us">
                      <li>Contact Us</li>
                    </Link>
                    <Link href="/privacy-policy">
                      <li>Privacy Policy</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="qt-footer-partition"></div>
              {/* <div
              className={`col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 qt-footer-border ${theme}-theme`}
            > */}
              <div className={`col qt-footer-border ${theme}-theme`}>
                <div className="d-flex flex-column align-items-lg-center align-items-sm-start">
                  <div>
                    {" "}
                    <h6>FEATURES</h6>
                    <ul>
                      <Link href="/blogs">
                        <li>Blogs</li>
                      </Link>
                      <Link href="/case-study">
                        <li>Case Study</li>
                      </Link>{" "}
                      <Link href="/partner-with-us">
                        <li>Partner With Us</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="qt-footer-partition"></div>
              {/* <div
              className={`col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 qt-footer-border ${theme}-theme`}
            >  */}
              <div className={`col qt-footer-border ${theme}-theme`}>
                <div className="d-flex flex-column align-items-lg-center align-items-sm-start">
                  <div>
                    <h6>Quick Links</h6>
                    <ul>
                      <Link href="/services/development/web-app">
                        <li>Development</li>
                      </Link>
                      <Link href="/services/cyber-security-engineering/web-app-pen-testing">
                        <li>Cybersecurity</li>
                      </Link>
                      <Link href="/qa-audit">
                        <li>Free QA Audit</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="qt-footer-partition"></div>
              {/* <div className="col-12 col-sm-6 col-md-4 col-lg-5 col-xl-5 "> */}
              <div className={`col-12 col-sm-4  ${theme}-theme`}>
                <div className="d-flex flex-column  align-items-lg-center align-items-sm-start ">
                  <div>
                    <h6>Newsletter</h6>
                    <p className={`qt-footer-description ${theme}-theme`}>
                      Hey Technocrat! Drop your Email here!
                    </p>
                    <form
                      onSubmit={formik.handleSubmit}
                      className={`qt-email ${theme}-theme`}
                      ref={formRef}
                    >
                      <LinearBorder borderRadius={30}>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="Email Address"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          name="email"
                          className=" w-100"
                        />
                      </LinearBorder>

                      <button>
                        {loader ? (
                          // <Spinner animation="grow" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                          // </Spinner>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_10_57)">
                              <path
                                d="M13.6931 7.6255L7.65855 1.59099L9.24953 0L18 8.7505L9.24953 17.5009L7.65855 15.9099L13.6931 9.8755H0V7.6255H13.6931Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_10_57">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        )}
                      </button>
                    </form>
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-2 ms-3 text-start text-danger fs-12 m-0 p-0 ps-2">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ position: "relative", zIndex: "3" }}>
            <div className="col d-flex justify-content-center align-items-center gap-3 gap-md-2 gap-lg-5 flex-wrap">
              <LinkedInIcon />
              <InstagramIcon />
              <FacebookIcon />
              {/* <YoutubeIcon /> */}
              <TwitterIcon />
            </div>
          </div>
        </div>

        {/* waves */}
        <div className="qt-wave-container">
          <div className="qt-wave-container-inner">
            <div className="wave-top">
              <Wave
                fill={waveFillColor}
                paused={false}
                // style={{
                //   backgroundImage: `url("/assets/footer/wave-top.png")`,
                // }}
                style={{
                  opacity: 0.05,
                }}
                options={{
                  height: 20,
                  amplitude: 50,
                  speed: 0.2,
                  points: 4,
                }}
              />
            </div>
            <div className="wave-bottom">
              <Wave
                fill={waveFillColor}
                paused={false}
                // style={{
                //   backgroundImage: `url("/assets/footer/wave-top.png")`,
                // }}
                style={{
                  opacity: 0.05,
                }}
                options={{
                  height: 20,
                  amplitude: 50,
                  speed: 0.3,
                  points: 4,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`qt-footer-bottom ${theme}-theme`}>
        <div className="container">
          <div className="row text-center align-items-center">
            <p className="m-0 p-0">
              {currentYear} © All Rights Reserved - Qualimatrix
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
