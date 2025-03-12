"use client";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

import { useTheme } from "@/context/ThemeContext";
import React, { useState, useRef, useEffect, useMemo } from "react";
import CTAButton from "../buttons/CTAButton";
import CloseButton from "../buttons/CloseButton";

import Modal, { ModalProps } from "react-bootstrap/Modal";
import { LinearBorder } from "../ui/LinearBorder";
import { useAlert } from "@/context/AlertContext";
import PhoneInputField from "../PhoneInput";
import countryList from "react-select-country-list";
import { createSupabaseBrowserClient } from "@/utils/supabase/browserClient";
import CountrySelector from "../CountrySelector";

interface KnowMoreProps extends ModalProps {
    // Add any additional props specific to your JobApplyForm component
    onHide?: () => void;
}

interface CloseButtonProps {
    onClose: () => void;
}

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
    company: Yup.string().required("Company name is required"),
    website: Yup.string().required("website is required"),
    message: Yup.string().required("Please Describe Message"),
    selectedCountry: Yup.string().required(
        "Please Select Your Country"
    ),
    check: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions to proceed.")
        .required("Agreement to terms is required"),
});

const supabase = createSupabaseBrowserClient();

const KnowMoreForm: React.FC<KnowMoreProps> = (props) => {
    const { showAlert } = useAlert();
    const { theme } = useTheme();
    const [loader, setLoader] = useState(false);
    const [agree, setAgree] = useState(false);
    const customDialogClassName = "custom-modal-dialog";
    const fillColor = theme === "dark" ? "#FEAE33" : "#555555";
    const iconFillColor = theme === "dark" ? "#FEAE33" : "#0159DC";
    const [phoneValue, setPhoneValue] = useState("");
    const [submitForm, setSubmitForm] = useState(false);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState("");

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])


    const changeHandler = (value: any) => {
        setValue(value)
    }

    const formRef = useRef<HTMLFormElement>(null);

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            company: "",
            message: "",
            website: "",
            selectedCountry: "",
            check: false
        },
        validationSchema,
        onSubmit: async (values, action) => {
            setLoader(true);
            try {
                const { data, error } = await supabase
                    .from("learning_know_more")
                    .insert([
                        {
                            fullName: values.fullName,
                            email: values.email,
                            company: values.company,
                            selectedCountry: values.selectedCountry,
                            phone: values.phone,
                            website: values.website,
                            message: values.message,
                            check: values.check
                        },
                    ])
                    .select();

                if (error) {
                    console.log(error);
                }

                else {
                    showAlert("success", "Form submitted successfully");
                }
            } catch (error) {
                console.log(error);
            } finally {
                if (props.onHide) props.onHide();
                setLoader(false);
            }
            action.resetForm();
        },
    });

    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName={"modal-90w"}
                id="qt-modal"
            >
                <div className="qt-modal-bg">
                    <CloseButton
                        onHide={() => {
                            formik.resetForm();
                            setSubmitForm(false);
                            setIsValidPhoneNumber("");
                            setPhoneValue("");
                            if (props.onHide) props.onHide();
                        }}
                    />

                    <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
                    <div className={`qt-form-wrap ${theme}-theme`}>
                        <div className={`qt-form ${theme}-theme`}>
                            <h1 className={`qt-title ${theme}-theme`}>
                                Know More
                            </h1>
                            <p className={`qt-description ${theme}-theme`}>
                                There are many variations of passages of Lorem Ipsum available.
                            </p>
                            <div className="contact-form">
                                <form ref={formRef} onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 p-0 ">
                                            <div className=" field-wrap2 w-100 mb-sm-5 mb-3 ">
                                                <LinearBorder>
                                                    <input
                                                        type="text"
                                                        placeholder="Full Name*"
                                                        className={`field-input w-100 ${theme}-theme `}
                                                        required
                                                        name="fullName"
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
                                            </div>{" "}

                                            {/* <div className="custom-dropdown w-100 mb-3 mb-sm-5"> */}

                                            <CountrySelector formik={formik} name="selectedCountry" />


                                            {/* <LinearBorder borderRadius={8}>
                                                    <select
                                                        className=" "
                                                        aria-label="Select Your Country*"
                                                        // value={selectedWorkType}
                                                        // onChange={handleWorkTypeChange}
                                                        required
                                                        name="selectedCountry"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.selectedCountry}
                                                    >
                                                        <option value="" hidden>
                                                            Select Your Country*
                                                        </option>
                                                        <option value="Basic">Basic</option>
                                                        <option value="Professional">Professional</option>
                                                        <option value="Enterprise">Enterprise</option>
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

                                                {formik.touched.selectedCountry &&
                                                    formik.errors.selectedCountry && (
                                                        <p className=" text-start text-danger fs-12 m-0 p-0 ps-2">
                                                            {formik.errors.selectedCountry}
                                                        </p>
                                                    )} */}
                                            {/* </div> */}

                                            <div className="field-wrap2 w-100 mb-sm-5 mb-3">
                                                <LinearBorder>
                                                    <input
                                                        type="text"
                                                        placeholder="Company Name"
                                                        className={`field-input w-100 ${theme}-theme`}
                                                        // required
                                                        name="company"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.company}
                                                    />
                                                </LinearBorder>
                                            </div>{" "}

                                        </div>
                                        <div className="col-md-6 col-sm-12 p-0">
                                            <div className="w-100 mb-sm-5 mb-3">
                                                <LinearBorder>
                                                    <input
                                                        type="email"
                                                        placeholder="Email Address*"
                                                        className={`field-input w-100 ${theme}-theme`}
                                                        required
                                                        name="email"
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
                                            </div>{" "}
                                            <div
                                                className={`qt-custom-phone-input w-100 mb-sm-5 mb-3 ${theme}-theme `}
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
                                            <div className="field-wrap2 w-100 mb-sm-5 mb-3">
                                                <LinearBorder>
                                                    <input
                                                        type="text"
                                                        placeholder="Website"
                                                        className={`field-input w-100 ${theme}-theme`}
                                                        // required
                                                        name="website"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.website}
                                                    />
                                                </LinearBorder>
                                            </div>{" "}
                                        </div>
                                        <div className="field-wrap2 w-100">
                                            <LinearBorder>
                                                <textarea
                                                    placeholder="Describe Your Experience"
                                                    rows={10}
                                                    className={`field-input w-100 ${theme}-theme `}
                                                    name="message"
                                                    // required
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.message}
                                                ></textarea>
                                            </LinearBorder>

                                            {formik.touched.message && formik.errors.message && (
                                                <p className=" text-start text-danger fs-12 m-0 p-0 ps-2">
                                                    {formik.errors.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className={`qt-checkbox-container mt-4 ${theme}-theme `}>
                                            <input
                                                type="checkbox"
                                                id="knowagree"
                                                name="check"
                                                checked={formik.values.check}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <label htmlFor="knowagree">
                                                I want to protect my data by signing an NDA
                                            </label>
                                            {formik.errors.check && formik.touched.check && (
                                                <p className="text-start text-danger fs-12 m-0 p-0 ps-2">
                                                    {formik.errors.check}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-100 d-md-flex justify-content-center mt-5">
                                            <CTAButton loader={loader} buttonText="Submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </Modal >
        </>
    );
};

export default KnowMoreForm;
