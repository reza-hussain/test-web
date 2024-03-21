const DropDown = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      {...rest}
    >
      <g clipPath="url(#clip0_1954_277)">
        <path
          d="M4.72791 7L8.72791 11L12.7279 7"
          stroke={rest.stroke ?? "url(#paint0_linear_1954_277)"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1954_277"
          x1="4.59544"
          y1="9"
          x2="12.9871"
          y2="9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#131D56" />
          <stop offset="0.269162" stopColor="#33145D" />
          <stop offset="0.522689" stopColor="#63166A" />
          <stop offset="0.702487" stopColor="#A4267B" />
          <stop offset="0.848653" stopColor="#DB327C" />
          <stop offset="1" stopColor="#EB4B46" />
        </linearGradient>
        <clipPath id="clip0_1954_277">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.727905)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DropDown;
