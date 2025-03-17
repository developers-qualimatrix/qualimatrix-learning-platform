"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useTheme } from "@/context/ThemeContext";
import React, { useRef, useState } from "react";
import CTAButton from "../buttons/CTAButton";
import CloseButton from "../buttons/CloseButton";

import { useAlert } from "@/context/AlertContext";
import { createSupabaseBrowserClient } from "@/utils/supabase/browserClient";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import CountrySelector from "../CountrySelector";
import PhoneInputField from "../PhoneInput";
import { LinearBorder } from "../ui/LinearBorder";

interface RegisterAccountProps extends ModalProps {
    // Add any additional props specific to your JobApplyForm component
    onHide?: () => void;
    selectedSchedule?: string;
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
    selectedCountry: Yup.string().required(
        "Please Select Your Country"
    ),
    check: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions to proceed.")
        .required("Agreement to terms is required"),
});

const supabase = createSupabaseBrowserClient();

const RegisterAccountForm: React.FC<RegisterAccountProps> = (props) => {
    console.log(props);
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

    const formRef = useRef<HTMLFormElement>(null);

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            selectedCountry: "",
            check: false,
        },
        validationSchema,
        onSubmit: async (values, action) => {
            setLoader(true);
            try {
                const { data, error } = await supabase
                    .from("cissp_users")
                    .insert([
                        {
                            selectedSchedule: props.selectedSchedule,
                            fullName: values.fullName,
                            email: values.email,
                            selectedCountry: values.selectedCountry,
                            phone: values.phone,
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
                                Register your Account
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

                                            <CountrySelector formik={formik} name="selectedCountry" />

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
                                        </div>

                                        <div className={`qt-checkbox-container mt-4 ${theme}-theme `}>
                                            <input
                                                type="checkbox"
                                                id="registeragree"
                                                name="check"
                                                checked={formik.values.check}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <label htmlFor="registeragree">
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

export default RegisterAccountForm;
