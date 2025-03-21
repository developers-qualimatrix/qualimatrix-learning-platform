"use client";
import { useTheme } from "@/context/ThemeContext";
import React, { useEffect, useState } from "react";
import CTAButton from "../buttons/CTAButton";
import CloseButton from "../buttons/CloseButton";
import { useAlert } from "@/context/AlertContext";
import { createSupabaseBrowserClient } from "@/utils/supabase/browserClient";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import RegisterAccountForm from "./RegisterAccount";

interface ScheduleProps extends ModalProps {
  onHide?: () => void;
}

const supabase = createSupabaseBrowserClient();

const ScheduleModal: React.FC<ScheduleProps> = (props) => {
  const { showAlert } = useAlert();
  const { theme } = useTheme();
  const [loader, setLoader] = useState(false);
  const [weekData, setWeekData] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    // Generate one week’s schedule data
    const today = new Date();
    const newData: any = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() + i);
      return {
        date: date.toDateString(),
        time: "12 PM - 6 PM",
      };
    });
    setWeekData(newData);
  }, []);

  const handleScheduleSelect = (date: string) => {
    setSelectedSchedule(date);
    setErrorMessage(""); // Remove error if a date is selected
  };

  // const handleSubmit = () => {
  //   if (!selectedSchedule) {
  //     setErrorMessage("⚠️ Please select a date before submitting.");
  //     return;
  //   }

  //   // Pass selected date to RegisterAccountForm
  //   setModalShow(true);
  // };

  const handleSubmit = () => {
    if (!selectedSchedule) {
      setErrorMessage("⚠️ Please select a date before submitting.");
      return;
    }

    // Close ScheduleModal
    if (props.onHide) props.onHide();

    // Open RegisterAccountForm after a slight delay
    setTimeout(() => {
      setModalShow(true);
    }, 300);
  };

  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
        id="qt-modal"
      >
        <div className="qt-modal-bg">
          <CloseButton
            onHide={() => {
              setSelectedSchedule("");
              setErrorMessage("");
              if (props.onHide) props.onHide();
            }}
          />

          <div className={`qt-form-wrap ${theme}-theme`}>
            <div className={`qt-form ${theme}-theme`}>
              <h1 className="qt-title">Schedule</h1>
              <p className="qt-description">
                Please select a date to schedule your session.
              </p>

              

              <div className="schedule-grid qt-description my-5">
                {weekData.map((entry: any, index) => (
                  <div
                    key={index}
                    className={`schedule-card ${
                      selectedSchedule === entry.date ? "selected" : ""
                    }`}
                    onClick={() => handleScheduleSelect(entry.date)}
                  >
                    <p className="text-lg font-medium text-gray-900 mb-0">
                      <strong>{entry.date}</strong>
                    </p>
                    <p className="text-gray-700 mb-0">{entry.time}</p>
                  </div>
                ))}
              </div>

              {/* 🚨 Error Message (if no date is selected) */}
              {errorMessage && (
                <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
              )}

              {/* 📩 Submit Button */}
              <div className="w-100 d-md-flex justify-content-center">
                <button className="qt-cissp-hero-btn " onClick={handleSubmit}>
                  Register Now
                </button>

                {/* <CTAButton loader={loader} buttonText="Submit" onClick={handleSubmit} /> */}
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Open Register Form if Date is Selected */}
      {selectedSchedule && modalShow && (
        <RegisterAccountForm
          selectedSchedule={selectedSchedule}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
    </>
  );
};

export default ScheduleModal;
