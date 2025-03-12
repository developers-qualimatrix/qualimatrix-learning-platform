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
      {/* <div
        className={`qt-description ${theme}-theme qt-case-solution-list-wrap `}
        style={{ listStyle: "none", padding: "0" }}
      >
        {cardList.map((item, ind) => {
          return (
            <div className="qt-case-solution-list" key={ind + 1}>
              <span>
                <TickIcon />
              </span>
              <p className="m-0">{item.title}</p>
            </div>
          );
        })}
      </div> */}

      <div
        className={`qt-description ${theme}-theme grid grid-cols-1 md:grid-cols-2 gap-4`}
        style={{ listStyle: "none", padding: "0" }}
      >
        {cardList.map((item, ind) => {
          return (
            <div className="qt-case-solution-list" key={ind + 1}>
              <span>
                <TickIcon />
              </span>
              <p className="m-0">{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SolutionCardList;
