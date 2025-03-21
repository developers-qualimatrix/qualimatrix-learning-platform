const CloseButton = ({ onHide }: { onHide?: any }) => {
  return (
    <div
      className="qt-modal-close-btn"
      onClick={onHide}
      data-bs-dismiss="modal"
    >
      <svg
        width="40" /* Adjust the size */
        height="40" /* Maintain aspect ratio */
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_883_18535)">
          <rect x="15" y="10" width="60" height="60" rx="30" fill="#0159DC" />
        </g>
        <g clipPath="url(#clip0_883_18535)">
          <path
            d="M45.0001 37.3334L54.3333 28L57 30.6667L47.6667 40.0001L57 49.3333L54.3333 52L45.0001 42.6667L35.6667 52L33 49.3333L42.3334 40.0001L33 30.6667L35.6667 28L45.0001 37.3334Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_883_18535"
            x="0"
            y="0"
            width="90"
            height="90"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="5" />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.00392157 0 0 0 0 0.34902 0 0 0 0 0.862745 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_883_18535"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_883_18535"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_883_18535">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(33 28)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default CloseButton;
