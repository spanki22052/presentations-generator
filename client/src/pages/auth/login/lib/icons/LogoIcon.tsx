import { memo } from "react";

export interface LogoIconProps extends React.SVGProps<SVGSVGElement> {}

export const LogoIcon = memo(function LogoIcon({
  width = "32",
  height = "32",
  ...props
}: LogoIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_logo)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_logo">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

