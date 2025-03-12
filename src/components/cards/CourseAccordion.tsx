"use client";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/style.css";

interface AccordionProps {
    title: string;
    content: string;
  }
  
  const CourseAccordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen((prev) => !prev);
    };
  
    return (
      <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion}>
          <h3>{title}</h3>
        </div>
        {isOpen && (
          <div className="accordion-content">
            <p>{content}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default CourseAccordion;
