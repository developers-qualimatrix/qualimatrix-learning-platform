"use client";
import React, { useState } from "react";
import SolutionCardList from "./SolutionCardList";
import KnowMoreForm from "../forms/KnowMoreForm";

interface TrainingCardProps {
  title: string;
  points: { id: number; title: string }[]; // Ensuring the structure matches SolutionCardList
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, points }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="qt-cisst-trainingcard">
        <div className="qt-cisst-trainingcard-header">{title}</div>
        <div className="qt-cisst-trainingcard-list">
          <SolutionCardList cardList={points} />
        </div>
        <button
          onClick={(e) => {
            // onHide();
            setModalShow(true);
            e.preventDefault();
          }}
          className="qt-cisst-trainingcard-button">Know More</button>
      </div>

      <KnowMoreForm show={modalShow} onHide={() => setModalShow(false)} />

    </>

  );
};

export default TrainingCard;
