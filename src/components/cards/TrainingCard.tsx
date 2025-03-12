"use client";
import React from "react";
import SolutionCardList from "./SolutionCardList";

interface TrainingCardProps {
  title: string;
  points: { id: number; title: string }[]; // Ensuring the structure matches SolutionCardList
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, points }) => {
  return (
    <div className="qt-cisst-trainingcard">
      <div className="qt-cisst-trainingcard-header">{title}</div>
      <div className="qt-cisst-trainingcard-list">
        <SolutionCardList cardList={points} />
      </div>
      <button className="qt-cisst-trainingcard-button">Know More</button>
    </div>
  );
};

export default TrainingCard;
