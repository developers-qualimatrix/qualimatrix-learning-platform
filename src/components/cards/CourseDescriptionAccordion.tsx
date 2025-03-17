"use client";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface AccordionItem {
  id: number;
  title: string;
  content: (string | string[])[];
}

const CourseDescriptionAccordion: React.FC<{
  accordionData: AccordionItem[];
}> = ({ accordionData }) => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`qt-course-description ${theme}-theme`}>
      {accordionData.map((item, ind) => (
        <div
          className={`card1 ${activeIndex === ind ? "active" : ""}`}
          key={item.id}
        >
          <button className="card-title" onClick={() => toggleAccordion(ind)}>
            {item.title}
            <span>{activeIndex === ind ? "➖" : "➕"}</span>
          </button>

          {/* Accordion Content - Hidden initially */}
          {activeIndex === ind && (
            <div className="card-description">
              {item.content.map((text, index) =>
                Array.isArray(text) ? (
                  <ul key={index}>
                    {text.map((point, subIndex) => (
                      <li key={subIndex}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={index}>{text}</p>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseDescriptionAccordion;
