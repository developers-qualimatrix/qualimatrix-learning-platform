"use client";
import { Spinner } from "react-bootstrap";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

interface SVGButtonProps {
  buttonText: string;
  className?: string;
  loader?: boolean;
  type?: "submit" | "button" | "reset";
}

const CTAButton: React.FC<SVGButtonProps> = ({
  buttonText,
  className,
  loader,
  type = "button",
}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="submit"
      className={`cta-btn ${theme}-theme ${className || ""}`}
    >
      <span>
        {loader ? (
          <Spinner animation="grow" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#0159DC" />
            <path
              d="M29.7222 20L23.8889 15V19.1667H10V20.8333H23.8889V25L29.7222 20Z"
              fill="white"
            />
          </svg>
        )}
      </span>
      {buttonText}
    </button>
  );
};

export default CTAButton;
