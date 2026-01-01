import { memo } from "react";

export interface TestimonialIconProps extends React.SVGProps<SVGSVGElement> {}

export const TestimonialIcon = memo(function TestimonialIcon({
  width = "32",
  height = "32",
  ...props
}: TestimonialIconProps) {
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
        d="M19 9l-2.5-1.5L14 5l-1.5 2.5L10 9l2.5 1.5L14 13l1.5-2.5L18 9zm-9 5l-2.5-1.5L5 11l-1.5 2.5L1 15l2.5 1.5L5 19l1.5-2.5L9 15zm9-9l-1.5-1.5L15 3l-1.5 1.5L12 6l1.5 1.5L15 9l1.5-1.5L18 6z"
        fill="#ffffff"
      />
    </svg>
  );
});
