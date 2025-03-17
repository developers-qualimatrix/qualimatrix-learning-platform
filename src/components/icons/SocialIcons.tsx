// SocialIcons.tsx
"use client";
import { useTheme } from "@/context/ThemeContext";
import React, { FC } from "react";

export const YoutubeIcon: FC = () => {
  const { theme } = useTheme();

  // Determine the fill and background color based on the current theme
  const fillColor = theme === "dark" ? "#1B1B1B" : "#fff";
  const backgroundColor = theme === "dark" ? "#FFFFFF" : "#1B1B1B";

  return (
    <>
      <a href="https://www.facebook.com/qualimatrix" target="_blank">
        {" "}
        <svg
          className="qt-social-svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 60 60"
        >
          {" "}
          <circle cx="30" cy="30" r="30" fill={backgroundColor} />
          <path
            d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"
            fill={fillColor}
          />
        </svg>
      </a>
    </>
  );
};

export const FacebookIcon: FC = () => {
  const { theme } = useTheme();

  // Determine the fill and background color based on the current theme
  const fillColor = theme === "dark" ? "#1B1B1B" : "#fff";
  const backgroundColor = theme === "dark" ? "#FFFFFF" : "#1B1B1B";

  return (
    <>
      <a href="https://www.facebook.com/qualimatrix" target="_blank">
        {" "}
        <svg
          className="qt-social-svg-icon"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="30" fill={backgroundColor} />
          <path
            d="M33.6 32.7H38.1L39.9 25.5H33.6V21.9C33.6 20.0471 33.6 18.3 37.2 18.3H39.9V12.2522C39.3137 12.1743 37.0974 12 34.7572 12C29.8711 12 26.4 14.9823 26.4 20.4595V25.5H21V32.7H26.4V48H33.6V32.7Z"
            fill={fillColor}
          />
        </svg>
      </a>
    </>
  );
};

export const InstagramIcon: FC = () => {
  const { theme } = useTheme();

  // Determine the fill and background color based on the current theme
  const fillColor = theme === "dark" ? "#1B1B1B" : "#fff";
  const backgroundColor = theme === "dark" ? "#FFFFFF" : "#1B1B1B";

  return (
    <>
      <a
        href="https://instagram.com/qualimatrix?utm_medium=copy_link"
        target="_blank"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="qt-social-svg-icon"
          viewBox="0 0 60 60"
          fill="none"
        >
          <g clipPath="url(#clip0_333_602)">
            <circle cx="30" cy="30" r="30" fill={backgroundColor} />
            <path
              d="M31.8495 12C33.8753 12.0033 34.9019 12.0141 35.7889 12.0405L36.1383 12.0519C36.5419 12.0662 36.9401 12.0842 37.4201 12.1067C39.3356 12.1952 40.6423 12.4983 41.7898 12.9438C42.9762 13.4013 43.9783 14.0193 44.9788 15.0198C45.9778 16.0204 46.596 17.0254 47.055 18.209C47.4989 19.355 47.802 20.663 47.892 22.5786C47.9134 23.0586 47.9307 23.4568 47.9449 23.8604L47.9563 24.2098C47.9825 25.0968 47.9946 26.1235 47.9984 28.1493L47.9998 29.4916C48 29.6556 48 29.8248 48 29.9994L47.9998 30.5072L47.9987 31.8495C47.9953 33.8753 47.9847 34.9019 47.9582 35.7889L47.9467 36.1383C47.9325 36.5419 47.9145 36.9401 47.892 37.4201C47.8034 39.3356 47.4989 40.6423 47.055 41.7898C46.5974 42.9762 45.9778 43.9783 44.9788 44.9788C43.9783 45.9778 42.9717 46.596 41.7898 47.055C40.6423 47.4989 39.3356 47.802 37.4201 47.892C36.9401 47.9134 36.5419 47.9307 36.1383 47.9449L35.7889 47.9563C34.9019 47.9825 33.8753 47.9946 31.8495 47.9984L30.5072 47.9998C30.3432 48 30.174 48 29.9994 48L29.4916 47.9998L28.1493 47.9987C26.1235 47.9953 25.0968 47.9847 24.2098 47.9582L23.8604 47.9467C23.4568 47.9325 23.0586 47.9145 22.5786 47.892C20.663 47.8034 19.358 47.4989 18.209 47.055C17.0239 46.5974 16.0204 45.9778 15.0198 44.9788C14.0193 43.9783 13.4028 42.9717 12.9438 41.7898C12.4983 40.6423 12.1967 39.3356 12.1067 37.4201C12.0854 36.9401 12.0679 36.5419 12.0538 36.1383L12.0425 35.7889C12.0161 34.9019 12.0041 33.8753 12.0002 31.8495L12 28.1493C12.0033 26.1235 12.0141 25.0968 12.0405 24.2098L12.0519 23.8604C12.0662 23.4568 12.0842 23.0586 12.1067 22.5786C12.1952 20.6615 12.4983 19.3565 12.9438 18.209C13.4013 17.0239 14.0193 16.0204 15.0198 15.0198C16.0204 14.0193 17.0254 13.4028 18.209 12.9438C19.3565 12.4983 20.6615 12.1967 22.5786 12.1067C23.0586 12.0854 23.4568 12.0679 23.8604 12.0538L24.2098 12.0425C25.0968 12.0161 26.1235 12.0041 28.1493 12.0002L31.8495 12ZM29.9994 20.999C25.026 20.999 20.999 25.0303 20.999 29.9994C20.999 34.9728 25.0303 38.9997 29.9994 38.9997C34.9728 38.9997 38.9997 34.9683 38.9997 29.9994C38.9997 25.026 34.9683 20.999 29.9994 20.999ZM29.9994 24.5992C32.9819 24.5992 35.3996 27.016 35.3996 29.9994C35.3996 32.9819 32.9826 35.3996 29.9994 35.3996C27.0169 35.3996 24.5992 32.9826 24.5992 29.9994C24.5992 27.0169 27.016 24.5992 29.9994 24.5992ZM39.4497 18.299C38.2089 18.299 37.1996 19.3068 37.1996 20.5475C37.1996 21.7882 38.2075 22.7976 39.4497 22.7976C40.6903 22.7976 41.6998 21.7897 41.6998 20.5475C41.6998 19.3068 40.6887 18.2974 39.4497 18.299Z"
              fill={fillColor}
            />
          </g>
          <defs>
            <clipPath id="clip0_333_602">
              <rect width="60" height="60" fill={fillColor} />
            </clipPath>
          </defs>
        </svg>
      </a>
    </>
  );
};

export const TwitterIcon: FC = () => {
  const { theme } = useTheme();

  // Determine the fill and background color based on the current theme
  const fillColor = theme === "dark" ? "#1B1B1B" : "#fff";
  const backgroundColor = theme === "dark" ? "#FFFFFF" : "#1B1B1B";

  return (
    <>
      <a href="https://twitter.com/qualimatrixx" target="_blank">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="qt-social-svg-icon"
          viewBox="0 0 60 60"
          fill="none"
        >
          <g clipPath="url(#clip0_333_596)">
            <circle cx="30" cy="30" r="30" fill={backgroundColor} />
            <path
              d="M40.3521 14H45.8723L33.8122 27.7839L48 46.5407H36.8911L28.1902 35.1648L18.2345 46.5407H12.7109L25.6104 31.7973L12 14H23.3909L31.2557 24.398L40.3521 14ZM38.4147 43.2366H41.4735L21.7288 17.1306H18.4464L38.4147 43.2366Z"
              fill={fillColor}
            />
          </g>
          <defs>
            <clipPath id="clip0_333_596">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </>
  );
};

export const LinkedInIcon: FC = () => {
  const { theme } = useTheme();

  // Determine the fill and background color based on the current theme
  const fillColor = theme === "dark" ? "#1B1B1B" : "#fff";
  const backgroundColor = theme === "dark" ? "#FFFFFF" : "#1B1B1B";

  return (
    <>
      <a href="https://www.linkedin.com/company/qualimatrix/" target="_blank">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="qt-social-svg-icon"
          viewBox="0 0 60 60"
          fill="none"
        >
          <g clipPath="url(#clip0_333_605)">
            <circle cx="30" cy="30" r="30" fill={backgroundColor} />
            <path
              d="M19.5552 16.7792C19.5545 18.3173 18.6213 19.7013 17.1958 20.2787C15.7703 20.8562 14.137 20.5117 13.0662 19.4077C11.9953 18.3037 11.7007 16.6607 12.3212 15.2534C12.9418 13.8461 14.3536 12.9556 15.891 13.0017C17.9328 13.063 19.5561 14.7364 19.5552 16.7792ZM19.6685 23.3521H12.1134V46.9994H19.6685V23.3521ZM31.6055 23.3521H24.0882V46.9994H31.53V34.5902C31.53 27.6774 40.5394 27.0352 40.5394 34.5902V46.9994H48V32.0215C48 20.3679 34.6653 20.8023 31.53 26.5252L31.6055 23.3521Z"
              fill={fillColor}
            />
          </g>
          <defs>
            <clipPath id="clip0_333_605">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </>
  );
};

export const FacebookIconPdf: FC = () => {
  return (
    <>
      <a href="https://www.facebook.com/qualimatrix" target="_blank">
        {" "}
        <img src="/assets/fb.png" height="40px" />
      </a>
    </>
  );
};

export const InstagramIconPdf: FC = () => {
  return (
    <>
      <a
        href="https://instagram.com/qualimatrix?utm_medium=copy_link"
        target="_blank"
      >
        {" "}
        <img src="/assets/instagram.png" height="40px" />
      </a>
    </>
  );
};

export const TwitterIconPdf: FC = () => {
  return (
    <>
      <a href="https://twitter.com/qualimatrixx" target="_blank">
        {" "}
        <img src="/assets/twitter.png" height="40px" />
      </a>
    </>
  );
};

export const LinkedInIconPdf: FC = () => {
  return (
    <>
      <a href="https://www.linkedin.com/company/qualimatrix/" target="_blank">
        {" "}
        <img src="/assets/linkedin.png" height="40px" />
      </a>
    </>
  );
};

export const TickIcon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_449_11107)">
        <path
          d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519941 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9966 8.81843 22.7313 5.76814 20.4816 3.51843C18.2319 1.26872 15.1816 0.00335979 12 0ZM17.2685 9.88384L10.8069 16.3454C10.7212 16.4312 10.6194 16.4993 10.5073 16.5457C10.3953 16.5922 10.2752 16.6161 10.1538 16.6161C10.0325 16.6161 9.91243 16.5922 9.80037 16.5457C9.68831 16.4993 9.5865 16.4312 9.50077 16.3454L6.73154 13.5762C6.55834 13.4029 6.46103 13.168 6.46103 12.9231C6.46103 12.6781 6.55834 12.4432 6.73154 12.27C6.90475 12.0968 7.13967 11.9995 7.38462 11.9995C7.62957 11.9995 7.86449 12.0968 8.0377 12.27L10.1538 14.3873L15.9623 8.57769C16.0481 8.49193 16.1499 8.4239 16.2619 8.37748C16.374 8.33107 16.4941 8.30718 16.6154 8.30718C16.7367 8.30718 16.8568 8.33107 16.9688 8.37748C17.0809 8.4239 17.1827 8.49193 17.2685 8.57769C17.3542 8.66345 17.4223 8.76527 17.4687 8.87733C17.5151 8.98938 17.539 9.10948 17.539 9.23077C17.539 9.35205 17.5151 9.47216 17.4687 9.58421C17.4223 9.69627 17.3542 9.79808 17.2685 9.88384Z"
          fill="#0159DC"
        />
      </g>
      <defs>
        <clipPath id="clip0_449_11107">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
