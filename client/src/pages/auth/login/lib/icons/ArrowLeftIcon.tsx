import { memo } from "react";

export interface ArrowLeftIconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowLeftIcon = memo(function ArrowLeftIcon({
  width = "20",
  height = "20",
  ...props
}: ArrowLeftIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

