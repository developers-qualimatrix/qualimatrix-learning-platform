import { useTheme } from "@/context/ThemeContext";
import React from "react";

interface RatingProps {
  rating: number;
}

const ProductRating: React.FC<RatingProps> = ({ rating }) => {
  const renderStars = (): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    const roundedRating = Math.round(rating * 2) / 2; // Round to the nearest half

    const { theme } = useTheme();
    for (let i = 0; i < 5; i++) {
      if (i + 0.5 < roundedRating) {
        // Fully filled star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_1030_131)">
              <path
                d="M3.70931 19.9999L6.03428 12.322L0 7.97741H7.51368L9.91789 -0.00012207L12.3235 7.97741H19.8358L13.8015 12.3205L16.1265 19.9999L9.91789 15.2808L3.70931 19.9999Z"
                fill={theme === "light" ? "#13120D" : "#FEAE33"}
              />
            </g>
            <defs>
              <clipPath id="clip0_1030_131">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      } else if (i + 0.5 === roundedRating) {
        // Half-filled star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_1030_131)">
              <path
                d="M9.83579 12.322L6.03428 12.322L3.70931 19.9999L6.03428 12.322L0 7.97741H7.51368L9.91789 -0.00012207L12.3235 7.97741H9.83579L6.03428 12.322Z"
                fill="#FCD34D"
              />
              <path
                d="M9.83579 12.322L6.03428 12.322L3.70931 19.9999L6.03428 12.322L0 7.97741H7.51368L9.91789 -0.00012207L12.3235 7.97741H9.83579L6.03428 12.322Z"
                fill="#C4C4C4"
              />
            </g>
            <defs>
              <clipPath id="clip0_1030_131">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      } else {
        // Empty star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_1030_131)">
              <path
                d="M3.70931 19.9999L6.03428 12.322L0 7.97741H7.51368L9.91789 -0.00012207L12.3235 7.97741H19.8358L13.8015 12.3205L16.1265 19.9999L9.91789 15.2808L3.70931 19.9999Z"
                fill="#C4C4C4"
              />
            </g>
            <defs>
              <clipPath id="clip0_1030_131">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      }
    }
    return stars;
  };

  return <div className="stars flex gap-1">{renderStars()}</div>;
};

export default ProductRating;
