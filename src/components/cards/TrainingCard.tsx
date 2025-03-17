"use client";
import React, { useState } from "react";
import KnowMoreForm from "../forms/KnowMoreForm";

interface TrainingCardProps {
  title: string;
  points: string[]; // List of bullet points
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, points }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="training-card">
        {/* Card Header */}
        <div className="training-card-header">
          <p className="training-card-title mb-0">{title}</p>
        </div>

        {/* Card Content */}
        <div className="training-card-list">
          {points.map((point, index) => (
            <div key={index} className="list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1_287)">
                  <path
                    d="M12 0.248047C9.62663 0.248047 7.30655 0.951834 5.33316 2.27041C3.35977 3.58899 1.8217 5.46313 0.913451 7.65584C0.00519941 9.84856 -0.232441 12.2614 0.230582 14.5891C0.693605 16.9169 1.83649 19.0551 3.51472 20.7333C5.19295 22.4116 7.33115 23.5544 9.65892 24.0175C11.9867 24.4805 14.3995 24.2428 16.5922 23.3346C18.7849 22.4263 20.6591 20.8883 21.9776 18.9149C23.2962 16.9415 24 14.6214 24 12.248C23.9966 9.06648 22.7313 6.01618 20.4816 3.76648C18.2319 1.51677 15.1816 0.251407 12 0.248047ZM17.2685 10.1319L10.8069 16.5934C10.7212 16.6793 10.6194 16.7473 10.5073 16.7938C10.3953 16.8402 10.2752 16.8642 10.1538 16.8642C10.0325 16.8642 9.91243 16.8402 9.80037 16.7938C9.68831 16.7473 9.5865 16.6793 9.50077 16.5934L6.73154 13.8242C6.55834 13.651 6.46103 13.4161 6.46103 13.1711C6.46103 12.9262 6.55834 12.6913 6.73154 12.518C6.90475 12.3448 7.13967 12.2475 7.38462 12.2475C7.62957 12.2475 7.86449 12.3448 8.0377 12.518L10.1538 14.6354L15.9623 8.82574C16.0481 8.73997 16.1499 8.67194 16.2619 8.62553C16.374 8.57911 16.4941 8.55522 16.6154 8.55522C16.7367 8.55522 16.8568 8.57911 16.9688 8.62553C17.0809 8.67194 17.1827 8.73997 17.2685 8.82574C17.3542 8.9115 17.4223 9.01332 17.4687 9.12537C17.5151 9.23743 17.539 9.35753 17.539 9.47881C17.539 9.6001 17.5151 9.7202 17.4687 9.83226C17.4223 9.94431 17.3542 10.0461 17.2685 10.1319Z"
                    fill="#0159DC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_287">
                    <rect
                      width="24"
                      height="23.6093"
                      fill="white"
                      transform="translate(0 0.248047)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => setModalShow(true)}
          className="qt-know-more"
        >
          Know More
        </button>
      </div>

      {/* Modal Form */}
      <KnowMoreForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

// Parent Component: Grid of 3 Cards per Row
const TrainingCardGrid: React.FC<{ data: TrainingCardProps[] }> = ({
  data,
}) => {
  return (
    <div className="training-card-grid">
      {data.map((card, index) => (
        <TrainingCard key={index} title={card.title} points={card.points} />
      ))}
    </div>
  );
};

export default TrainingCardGrid;
