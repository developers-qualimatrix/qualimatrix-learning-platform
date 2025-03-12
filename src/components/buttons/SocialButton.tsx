// SocialButton.tsx
"use client";
import React, { FC, ReactElement, MouseEvent } from "react";

interface SocialButtonProps {
  svg: ReactElement;
  altText: string;
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
}

const SocialButton: FC<SocialButtonProps> = ({ svg, altText, onClick }) => (
  <span onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
    >
      {svg}
    </svg>
    <span>{altText}</span>
  </span>
);

export default SocialButton;
