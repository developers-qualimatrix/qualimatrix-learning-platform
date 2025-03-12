"use client";
import PhoneInputField from "@/components/PhoneInput";
import { useAlert } from "@/context/AlertContext";
import { useTheme } from "@/context/ThemeContext";
import { createSupabaseBrowserClient } from "@/utils/supabase/browserClient";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import CTAButton from "../buttons/CTAButton";
import { LinearBorder } from "../ui/LinearBorder";

const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Only alphabets and spaces are allowed")
        .required("Full Name is required"),
    email: Yup.string()
        .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email address"
        )
        .required("Email Address is required"),
    phone: Yup.string()
        .matches(
            /^(\+?[0-9]{10,15}|[0-9]{10,15})$/,
            "Phone can start with '+' and contain only numbers, minimum 10 digits and maximum 15 digits."
        )
        .required("Phone is required"),
    check: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions to proceed.")
        .required("Agreement to terms is required"),
    // message: Yup.string().required("Message is required"),
    location: Yup.string().required("Location is required"),
    wheretofindus: Yup.string().required(
        "Please Select Dedicated Resources"
    ),
});

const supabase = createSupabaseBrowserClient();

const CorporateTrainingForm = () => {
    const { theme } = useTheme();
    const { showAlert } = useAlert();
    //  const [agree, setAgree] = useState(false);
    const fillColor = theme === "dark" ? "#FEAE33" : "#555555";
    const [fileName, setFileName] = useState("Attachment");
    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState<any>({ images: [] });
    const [key, setKey] = useState(0);
    const [fileError, setFileError] = useState(false);
    const [phoneValue, setPhoneValue] = useState("");
    const iconFillColor = theme === "dark" ? "#FEAE33" : "#0159DC";
    const [submitForm, setSubmitForm] = useState(false);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState("");
    const formRef = useRef<HTMLFormElement>(null);
    const [attachmentUrl, setAttachmentUrl] = useState("");

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            message: "",
            check: false,
            location: "",
            wheretofindus: ""
        },
        validationSchema,
        onSubmit: async (values, action) => {
            setLoader(true);
            try {
                const { data, error } = await supabase
                    .from("corporate_training_requests")
                    .insert([
                        {
                            fullName: values.fullName,
                            email: values.email,
                            phone: values.phone,
                            location: values.location,
                            message: values.message,
                            check: values.check,
                            wheretofindus: values.wheretofindus

                        },
                    ])
                    .select();

                if (error) {
                    console.log(error);
                    return;
                }
                else {
                    showAlert("success", "Form submitted successfully");
                }
                formik.resetForm();
            } catch (error: any) {
                console.log(error);
            } finally {
                setLoader(false);
            }
            action.resetForm();
        },
    });

    return (
        <div>
            <div className={`qt-cyber-mobile-form ${theme}-theme`}>
                <h1 className={`qt-title text-center ${theme}-theme`}>
                    Request for Corporate Training
                </h1>
                <p className={`qt-description text-center ${theme}-theme`}>
                    It's good to reconsider decision while spending Money, But Too much Re-consideration can make
                    your Business Suffer So fill the form ASAP!!
                </p>
                <div className="contact-form cyber mt-4">
                    <form ref={formRef} onSubmit={formik.handleSubmit}>
                        <div className="row gap-5 gap-md-0">
                            <div className="col-12 col-md-6 left-col">
                                <div className="field-wrap1 w-100">
                                    <div className="field-wrap2 w-100 mb-5">
                                        <LinearBorder>
                                            <input
                                                type="text"
                                                placeholder="Full Name*"
                                                className={`field-input ${theme}-theme`}
                                                name="fullName"
                                                // required
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.fullName}
                                            />
                                        </LinearBorder>
                                        {formik.touched.fullName && formik.errors.fullName && (
                                            <p className=" text-start text-danger fs-12 m-0 p-0 ps-2">
                                                {formik.errors.fullName}
                                            </p>
                                        )}
                                    </div>
                                    <div className="field-wrap2 w-100 mb-5">
                                        <LinearBorder>
                                            <input
                                                type="email"
                                                placeholder="Email Address*"
                                                className={`field-input ${theme}-theme`}
                                                name="email"
                                                // required
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />
                                        </LinearBorder>
                                        {formik.touched.email && formik.errors.email && (
                                            <p className=" text-start text-danger fs-12 m-0 p-0 ps-2">
                                                {formik.errors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div
                                        className={`qt-custom-phone-input w-100 ${theme}-theme mb-5`}
                                    >
                                        <LinearBorder>
                                            <PhoneInputField
                                                value={formik.values.phone}
                                                onChange={(value) =>
                                                    formik.setFieldValue("phone", value)
                                                }
                                            />
                                            {formik.touched.phone && formik.errors.phone && (
                                                <p className=" text-start text-danger fs-12 m-0 p-0 ps-2">
                                                    {formik.errors.phone}
                                                </p>
                                            )}
                                        </LinearBorder>

                                        {submitForm && isValidPhoneNumber && (
                                            <p className=" text-start text-danger fs-12 m-0 p-0 ps-2">
                                                {isValidPhoneNumber}
                                            </p>
                                        )}
                                    </div>
                                    <div className="field-wrap2 w-100 mb-5">
                                        <LinearBorder>
                                            <input
                                                type="text"
                                                placeholder="Location"
                                                className={`field-input ${theme}-theme`}
                                                name="location"
                                                // required
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.location}
                                            />
                                        </LinearBorder>
                                        {formik.touched.location && formik.errors.location && (
                                            <p className=" text-start text-danger fs-12 m-0 p-0 ps-2">
                                                {formik.errors.location}
                                            </p>
                                        )}
                                    </div>
                                    <div className="custom-dropdown w-100 mb-3 mb-sm-5">
                                        <LinearBorder borderRadius={8}>
                                            <select
                                                className="w-full "
                                                aria-label="wheretofindus"
                                                // value={selectedWorkType}
                                                // onChange={handleWorkTypeChange}
                                                required
                                                name="wheretofindus"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.wheretofindus}
                                            >
                                                <option value="" hidden>
                                                    Where did you find us?
                                                </option>
                                                <option value="google">Google</option>
                                                <option value="social-media">Social Media</option>
                                                <option value="friend-colleague">Friend/Colleague</option>
                                                <option value="advertisement">Advertisement</option>
                                                <option value="website">Company Website</option>
                                                <option value="event">Event/Conference</option>
                                                <option value="other">Other</option>
                                            </select>{" "}
                                            <div className="custom-arrow">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="19"
                                                    viewBox="0 0 18 19"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_883_27268)">
                                                        <path
                                                            d="M15.4286 5.41797L9 11.6055L2.57143 5.41797L-5.40928e-08 6.65547L9 15.318L18 6.65547L15.4286 5.41797Z"
                                                            fill={iconFillColor}
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_883_27268">
                                                            <rect
                                                                width="18"
                                                                height="18"
                                                                fill="white"
                                                                transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0.917969)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </LinearBorder>

                                        {formik.touched.wheretofindus &&
                                            formik.errors.wheretofindus && (
                                                <p className=" text-start text-danger fs-12 m-0 p-0 ps-2">
                                                    {formik.errors.wheretofindus}
                                                </p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>{" "}
                            <div className="col-12 col-md-6 right-col">

                                <div className="w-100 message-block-wrap">
                                    <LinearBorder>
                                        <textarea
                                            placeholder="Write your message here..."
                                            rows={5}
                                            className={`field-input w-100 ${theme}-theme message-input `}
                                            name="message"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.message}
                                        ></textarea>

                                        {formik.touched.message && formik.errors.message && (
                                            <p className=" text-start text-danger fs-12 m-0 p-0 ps-2">
                                                {formik.errors.message}
                                            </p>
                                        )}
                                    </LinearBorder>
                                </div>{" "}

                                <div className={`qt-checkbox-container mt-4 ${theme}-theme `}>
                                    <input
                                        type="checkbox"
                                        id="agree"
                                        name="check"
                                        checked={formik.values.check}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <label htmlFor="agree">
                                        By providing your contact details, you agree to our <span style={{ color: "#0159DC" }} className="text-[#0159DC]">Privacy Policy</span>
                                    </label>
                                </div>
                                {formik.errors.check && formik.touched.check && (
                                    <p className="text-start text-danger fs-12 m-0 p-0 ps-2">
                                        {formik.errors.check}
                                    </p>
                                )}
                                <div className="field-wrap2 w-100">
                                    <div className="w-100 d-md-flex mt-4 ">
                                        <CTAButton
                                            // type="submit"
                                            buttonText="Submit"
                                            loader={loader}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CorporateTrainingForm;