"use client";
import { useTheme } from "@/context/ThemeContext";

interface AccordionItem {
  id: number;
  title: string;
  description: string;
}

// Your existing accordion component
const ServiceFaqAccordion: React.FC<{ accordionData: AccordionItem[] }> = ({
  accordionData,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={`qt-service-faq-block ${theme}-theme`}>
        <div className="card">
          {accordionData.map((item, ind) => {
            return (
              <div className="card1" key={ind + 1}>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServiceFaqAccordion;
