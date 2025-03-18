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

  const handleSubmit = () => {
    if (!selectedSchedule) {
      setErrorMessage("⚠️ Please select a date before submitting.");
      return;
    }

    // Pass selected date to RegisterAccountForm
    setModalShow(true);
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

              {/* 🗓️ Weekly Schedule Selection */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  gap: "16px",
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5"
              >
                {weekData.map((entry: any, index) => (
                  <div
                    style={{ width: "300px" }}
                    key={index}
                    className={`p-4 border rounded-lg shadow-sm cursor-pointer transition duration-300 ${
                      selectedSchedule === entry.date
                        ? "border-2 border-blue-500 bg-blue-100"
                        : "bg-gray-100 hover:border-blue-400"
                    }`}
                    onClick={() => handleScheduleSelect(entry.date)}
                  >
                    <p className="text-lg font-medium text-gray-900">
                      {entry.date}
                    </p>
                    <p className="text-gray-700">{entry.time}</p>
                  </div>
                ))}
              </div>

              {/* 🚨 Error Message (if no date is selected) */}
              {errorMessage && (
                <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
              )}

              {/* 📩 Submit Button */}
              <div className="w-100 d-md-flex justify-content-center mt-5">
                <button className="qt-cissp-hero-btn" onClick={handleSubmit}>
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
