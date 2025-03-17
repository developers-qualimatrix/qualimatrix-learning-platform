"use client";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { TickIcon } from "../icons/SocialIcons";

interface CardList {
  title: string;
}

interface CardListProps {
  cardList: CardList[];
}

const SolutionCardList: React.FC<CardListProps> = ({ cardList }) => {
  const { theme } = useTheme();
  return (
    <>
      <div className={`qt-description ${theme}-theme qt-key-feature`}>
        {cardList.map((item, ind) => (
          <div className="qt-case-solution-list" key={ind + 1}>
            <span>
              <TickIcon />
            </span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SolutionCardList;
