"use client"; // Required for Next.js App Router

import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-container">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/qualimatrix/lms?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
