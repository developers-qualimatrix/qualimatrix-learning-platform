import { useTheme } from "@/context/ThemeContext";
import React, { useEffect, useRef, useState } from "react";
import { CardLinearBorder } from "../CardLinearBorder";
import { useSearchParams } from "next/navigation";

interface CardItem {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
}

const SecurityConsulting: React.FC<{ cardData: CardItem[] }> = ({
  cardData,
}) => {
  const searchParams = useSearchParams();

  const { theme } = useTheme();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const currentCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      console.log(hash);
      setSelectedCard(hash || null);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [searchParams]);

  useEffect(() => {
    if (selectedCard && currentCardRef.current) {
      const currentCardRect = currentCardRef.current.getBoundingClientRect();
      const offsetTop = window.scrollY + (currentCardRect?.top || 0);
      window.scrollTo({ top: offsetTop - 100, behavior: "smooth" });
    }
  }, [selectedCard]);

  const handleCardClick = (id: string) => {
    console.log(id);
    setSelectedCard(id);
    window.location.hash = id;
  };

  return (
    <div>
      <div className="qt-service-main-block">
        <div className="cards-1">
          {cardData.map((item, ind) => {
            const id = item.title.toLowerCase().replace(/\s+/g, "-");
            const isSelected = id === selectedCard;
            return (
              <div
                className={`card ${theme}-theme ${
                  isSelected ? "qt-service-card-with-shadow" : ""
                }`}
                key={ind + 1}
                id={id}
                ref={isSelected ? currentCardRef : null}
                onClick={() => handleCardClick(id)}
              >
                <div className="card-body">
                  <div className="qt-custom-card-img-wrap">
                    <CardLinearBorder borderRadius={20}>
                      <div className={`card-img-wrap ${theme}-theme`}>
                        <img
                          src={item.imgSrc}
                          alt="icon"
                          height="60px"
                          width="60px"
                        />{" "}
                      </div>{" "}
                    </CardLinearBorder>
                  </div>
                  <h2
                    className={`qt-title-3 ${theme}-theme`}
                    style={{ textTransform: "none" }}
                  >
                    {item.title}
                  </h2>
                  <p className={`qt-description ${theme}-theme`}>
                    {item.description}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecurityConsulting;
